import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';
import { CipherUtil } from '../../common/util/cipher.util';

@Entity({ name: 'tb_user' })
export class User extends BaseEntity {
  constructor(private cipherUtil: CipherUtil) {
    super();
  }

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 100 })
  readonly username: string;

  @Column({ length: 255 })
  readonly password: string;

  @Column({ length: 20 })
  readonly name: string;

  @Column({ length: 11, nullable: true })
  readonly phone: string;

  @Column({ length: 2, type: 'char' })
  readonly smsYn: string;
}
