import { Module } from '@nestjs/common';
import { PasswordsService } from './passwords.service';
import { PasswordsController } from './passwords.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordEntry, PasswordEntrySchema } from './schemas/password-entry.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: PasswordEntry.name, schema: PasswordEntrySchema }])],
  controllers: [PasswordsController],
  providers: [PasswordsService],
})
export class PasswordsModule {}
