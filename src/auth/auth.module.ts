import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

//export to allow other files in the project to use it
@Module({
    imports: [PrismaModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
