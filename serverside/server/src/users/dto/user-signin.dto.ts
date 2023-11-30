import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';


export class UserSignInDto{
    @IsNotEmpty({message:'email can not be empty'})
    @IsEmail({},{message:'please provide a valid email'})
    email:string;

    @IsNotEmpty({message:'Password can not be empty'})
    @MinLength(6,{message:'password minimum character should be 6'})
    password:string;
}