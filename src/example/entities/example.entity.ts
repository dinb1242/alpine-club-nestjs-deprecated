import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_example' })
export class Example {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 100 })
  readonly title: string;

  @Column({ length: 300 })
  readonly content: string;
}
