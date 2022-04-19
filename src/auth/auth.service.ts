import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  /**
   * 유저의 정보를 받아 전달받은 정보가 일치한지 확인한다.
   * @param username
   * @param password
   */
  async validateUser(username: string, password: string) {
    // 유저 정보 불러오기
    const user = await this.userService.findOneByUsername(username);

    // 비밀번호 검증
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...response } = user;
      return response;
    }

    return null;
  }
}
