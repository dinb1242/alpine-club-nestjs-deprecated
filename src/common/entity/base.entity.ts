import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly modifiedAt: Date;

  @Column({ type: 'int', default: 1 })
  readonly status: number;
}
