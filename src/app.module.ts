import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

//The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
@Module({
  imports: [AuthModule, UserModule, BookmarkModule, LoginModule, PrismaModule],
})

export class AppModule {}
