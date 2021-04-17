import { ApiProperty } from '@nestjs/swagger';
import { Settings } from '@org/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class SettingsEntity implements Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  @ApiProperty({
    example: true,
    description: 'Whether the users grid is enabled',
  })
  isUsersGridActive: boolean;
}
