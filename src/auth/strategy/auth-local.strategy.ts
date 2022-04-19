import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user)
      throw new HttpException(
        '아이디 또는 비밀번호가 일치하지 않습니다.',
        HttpStatus.UNAUTHORIZED,
      );
    return user;
  }
}
