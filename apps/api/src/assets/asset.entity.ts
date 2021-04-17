import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AssetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @Column()
  bucket: string;

  @Column()
  key: string;

  @Column()
  location: string;
}
