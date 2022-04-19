import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthLocalGuard } from './guard/auth-local.guard';
import { Request } from 'express';

@ApiTags('인증 API')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthLocalGuard)
  @ApiOperation({ summary: '로그인 API' })
  @Post('login')
  async login(@Req() request: Request) {
    return request.user;
  }
}
