import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //this module is now available to every module in the app
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
