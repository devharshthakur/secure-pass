import { Controller, Post, Get, Put, Body, NotFoundException } from '@nestjs/common';
import { PasswordsService } from './passwords.service';

@Controller('passwords')
export class PasswordsController {
  constructor(private readonly passwordsService: PasswordsService) {}

  @Post('add')
  async addPassword(@Body() body: { label: string; username: string; password: string }) {
    const { label, username, password } = body;
    return this.passwordsService.createPasswordEntry(label, username, password);
  }

  @Post('search')
  async getPassword(@Body() body: { label: string }) {
    const { label } = body;
    const entry = await this.passwordsService.getPasswordEntryByLabel(label);
    if (!entry) throw new NotFoundException('Password entry not found');
    return entry;
  }

  @Get('all')
  async getAllPasswords() {
    return this.passwordsService.getAllPasswordEntries();
  }

  @Put('update')
  async updatePassword(@Body() body: { label: string; newUsername: string; newPassword: string }) {
    const { label, newUsername, newPassword } = body;
    const updated = await this.passwordsService.updatePasswordEntry(label, newUsername, newPassword);
    if (!updated) throw new NotFoundException('Password entry not found');
    return updated;
  }
}
