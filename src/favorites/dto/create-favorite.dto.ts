import { ApiProperty } from '@nestjs/swagger';

export class FavoriteDto {
  @ApiProperty({
    example: '6174474fb9d70ede8b94a3fa',
    description: 'Id User',
  })
  productId: string;

  @ApiProperty({
    example: '4543367512203',
    description: 'Id Product',
  })
  userId: string;
}
