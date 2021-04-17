import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class SettingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  @ApiProperty({
    example: true,
    description: 'Whether the users grid is enabled',
  })
  isUsersGridActive: boolean;
}
