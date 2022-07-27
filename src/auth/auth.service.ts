import { Injectable } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}

    // the creation of a user
    signin(){
        return {msg: "on god ive signed in"}
    }

    signup(){
        return {msg: "on god ive signed up"}
    }
}