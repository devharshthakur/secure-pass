import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PasswordEntry, PasswordEntryDocument } from './schemas/password-entry.schema';
import { Model } from 'mongoose';
import { EncryptionUtil } from '../shared/utils/encryption.util';
import { HashingUtil } from '../shared/utils/hashing.util';
import { PasswordEntryResult, PasswordEntryListItem } from '../shared/interfaces/password-entry.interface';

@Injectable()
export class PasswordsService {
  private readonly encryptionUtil = new EncryptionUtil();
  private readonly hashingUtil = new HashingUtil();

  constructor(@InjectModel(PasswordEntry.name) private passwordModel: Model<PasswordEntryDocument>) {}

  async createPasswordEntry(label: string, username: string, password: string): Promise<PasswordEntry> {
    const labelHash = this.hashingUtil.hashLabel(label);
    const encryptedUsername = this.encryptionUtil.encrypt(username);
    const encryptedPassword = this.encryptionUtil.encrypt(password);

    const newEntry = new this.passwordModel({
      labelHash,
      encryptedUsername,
      encryptedPassword,
    });

    return newEntry.save();
  }

  async getPasswordEntryByLabel(label: string): Promise<PasswordEntryResult | null> {
    const labelHash = this.hashingUtil.hashLabel(label);
    const entry = await this.passwordModel.findOne({ labelHash });
    if (!entry) return null;
    return {
      label,
      username: this.encryptionUtil.decrypt(entry.encryptedUsername),
      password: this.encryptionUtil.decrypt(entry.encryptedPassword),
    };
  }

  async getAllPasswordEntries(): Promise<PasswordEntryListItem[]> {
    const entries = await this.passwordModel.find();
    return entries.map((entry) => ({
      labelHash: entry.labelHash,
      username: this.encryptionUtil.decrypt(entry.encryptedUsername),
      password: this.encryptionUtil.decrypt(entry.encryptedPassword),
    }));
  }

  async updatePasswordEntry(label: string, newUsername: string, newPassword: string): Promise<PasswordEntry | null> {
    const labelHash = this.hashingUtil.hashLabel(label);
    const encryptedUsername = this.encryptionUtil.encrypt(newUsername);
    const encryptedPassword = this.encryptionUtil.encrypt(newPassword);

    return this.passwordModel.findOneAndUpdate({ labelHash }, { encryptedUsername, encryptedPassword }, { new: true });
  }
}
