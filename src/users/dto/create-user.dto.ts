import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'queialn@teste.com', description: 'Email user' })
  email: string;
  @ApiProperty({ example: 'Queilan', description: 'name user' })
  username: string;
  @ApiProperty({ example: 'senha123', description: 'password user' })
  password: string;
}
