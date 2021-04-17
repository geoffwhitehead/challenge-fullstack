import { ApiProperty } from '@nestjs/swagger';
import { Asset } from '@org/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AssetEntity implements Asset {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 123,
    description: 'The id of the asset',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'image/png',
    description: 'The mimetype of the asset',
  })
  mimetype: string;

  @Column()
  @ApiProperty({
    example: 123456,
    description: 'The size of the asset',
  })
  size: number;

  @Column()
  @ApiProperty({
    example: 'my-aws-bucket',
    description: 'The aws bucket id where the asset is stored',
  })
  bucket: string;

  @Column()
  @ApiProperty({
    example: 'folder/file.ext',
    description: 'The folder and filename of the stored asset',
  })
  key: string;

  @Column()
  @ApiProperty({
    example: 'https://my-bucket.s3.amazonaws.com/my-key',
    description: 'The aws location to the asset',
  })
  location: string;
}
