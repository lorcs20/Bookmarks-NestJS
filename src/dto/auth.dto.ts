import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthDTO{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
    // applied transformation and validation pipes
}