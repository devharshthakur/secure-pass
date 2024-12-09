import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordsModule } from './passwords/passwords.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/securepass'), PasswordsModule],
})
export class AppModule {}
