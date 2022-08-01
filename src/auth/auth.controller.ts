import { Body, Controller, Post } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDTO } from "src/dto";


@Controller("auth")
export class AuthController{
    //dependency injection, lets call an instance of the service class in the constructor 
    constructor(private authService : AuthService){}

    @Post("signup")
    signup(@Body() dto: AuthDTO){   //dto - data transfer object...@Body gets body of the post request..
       return this.authService.signup(dto);
    }

    @Post("signin")
    signin(){
        return this.authService.signin();
    }
}
