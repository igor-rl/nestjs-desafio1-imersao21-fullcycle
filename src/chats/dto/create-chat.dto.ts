import { IsString } from 'class-validator';

export class CreateChatDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  mensagem: string;
}
