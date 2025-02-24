import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ChatsModule, PrismaModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
