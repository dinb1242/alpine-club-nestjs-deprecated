import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CipherUtil } from '../common/util/cipher.util';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private connection: Connection,
    private cipherUtil: CipherUtil,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.connection.transaction(async (manager) => {
      const userRepository = await this.connection.getRepository(User);
      // 일치하는 username이 있는지 확인
      const user = await userRepository.findOne({
        where: { username: createUserDto.username },
      });
      if (user)
        throw new HttpException(
          '이미 존재하는 유저입니다. username=' + createUserDto.username,
          HttpStatus.BAD_REQUEST,
        );

      // 비밀번호 해싱
      createUserDto.password = await this.cipherUtil.encrypt(
        createUserDto.password,
      );

      // 저장
      const result = await userRepository.save(createUserDto);
      const { password, ...response } = result;
      return response;
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOneByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username: username } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
