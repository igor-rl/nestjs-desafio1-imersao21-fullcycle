import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatsService {
  constructor(private readonly prisma: PrismaService) { }

  create(createChatDto: CreateChatDto) {
    // Aqui você pode fazer validações ou transformações no `createChatDto` se necessário
    return this.prisma.chat.create({
      data: createChatDto,
    });
  }

  async findAll() {
    const chats = await this.prisma.chat.findMany();
    if (!chats.length) {
      throw new NotFoundException('Nenhum chat encontrado');
    }
    return chats;
  }

  async update(id: number, options: { read: boolean; received: boolean }) {
    // verificar se existe, se não retornar notfound
    const chat = await this.prisma.chat.findUnique({ where: { id } });
    if (!chat) {
      throw new NotFoundException('Chat não encontrado');
    }
    // Validando se pelo menos uma opção foi informada
    if (!options.read && !options.received) {
      throw new BadRequestException('Opções não informadas');
    }

    const updateData: { readAt?: Date; receivedAt?: Date } = {};

    if (options.read) {
      updateData.readAt = new Date();
    }

    if (options.received) {
      updateData.receivedAt = new Date();
    }

    await this.prisma.chat.update({
      where: { id },
      data: updateData,
    });

    return;
  }
}
