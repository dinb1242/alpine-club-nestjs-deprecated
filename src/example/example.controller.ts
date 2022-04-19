import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('예제 API')
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @ApiOperation({
    summary: '예제 생성 API',
    description: '예제 데이터를 DB에 등록하는 API',
  })
  @ApiResponse({ description: '생성 성공', status: HttpStatus.CREATED })
  @ApiResponse({ description: '생성 실패', status: HttpStatus.BAD_REQUEST })
  @Post()
  async create(@Body() createExampleDto: CreateExampleDto) {
    return await this.exampleService.create(createExampleDto);
  }

  @Get()
  findAll() {
    return this.exampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exampleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExampleDto: UpdateExampleDto) {
    return this.exampleService.update(+id, updateExampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exampleService.remove(+id);
  }
}
