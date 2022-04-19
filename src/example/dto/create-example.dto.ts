import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleDto {
  @ApiProperty({
    title: '제목',
    example: 'Example Title',
  })
  title: string;

  @ApiProperty({
    title: '내용',
    example: 'Example Content',
  })
  content: string;
}
