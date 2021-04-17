import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AssetEntity } from '../assets/asset.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 123, description: 'The user id' })
  id: number;

  @Column()
  @Index({ unique: true })
  @ApiProperty({
    example: 'user@test.com',
    description: 'The email address of the user',
  })
  email: string;

  @Column()
  @ApiProperty({ example: 'Peter', description: 'The first name of the user' })
  firstName: string;

  @Column()
  @ApiProperty({ example: 'Griffin', description: 'The last name of the user' })
  lastName: string;

  @Column()
  @ApiProperty({
    example: '0123456789',
    description: 'The phone number of the user',
  })
  phone: string;

  @OneToOne(() => AssetEntity)
  @JoinColumn()
  @ApiProperty({
    example: 456,
    description: 'The reference to the photo asset',
  })
  photo: number;
}
