import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Example } from './entities/example.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>,
  ) {}

  async create(createExampleDto: CreateExampleDto) {
    // FIXME: Transaction 처리
    await this.exampleRepository.findOneOrFail({ where: { id: 'a' } });
    return await this.exampleRepository.save(createExampleDto);
  }

  findAll() {
    return `This action returns all example`;
  }

  async findOne(id: number) {
    return await this.exampleRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateExampleDto: UpdateExampleDto) {
    return `This action updates a #${id} example`;
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }
}
