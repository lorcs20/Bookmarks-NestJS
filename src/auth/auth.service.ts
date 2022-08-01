import { Injectable } from "@nestjs/common";
import { argon2d } from "argon2";
import { stringify } from "querystring";
import { AuthDTO } from "src/dto";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}

    // the creation of a user
    signin(){ //the data we will receive from the client will be correct now
        return {msg: "on god ive signed in"}
    }

    async signup(dto: AuthDTO){
     
        //hashing the password with bcrypt
        const hash = await bcrypt.hashSync(dto.password, 7);

        // creating a user with prisma ORM
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            }, 
            
        });
        // but we dont want to actually return the hash because thats unsafe practice so lets just select non-private data
        //quick and dirty solution 
        delete user.hash;
        
        return user;
    }
}