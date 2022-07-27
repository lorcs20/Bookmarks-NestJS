import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//creating logic to connect to the database
//PrismaClient allows connection to database with its built in methods
@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        //super will call the constructor of the exteding class PrismaClient
        super({
            datasources:{
                db:{                
                    url:"postgresql://postgres:123@localhost:5434/dev-db?schema=public"
                },
            },
        });
    }
}
