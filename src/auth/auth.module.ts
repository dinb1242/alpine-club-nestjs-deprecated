import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthLocalStrategy } from './strategy/auth-local.strategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, AuthLocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
