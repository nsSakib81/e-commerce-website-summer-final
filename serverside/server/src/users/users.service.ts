import { UserSignUp } from './dto/user-signup.dto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserSignInDto } from './dto/user-signin.dto';



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signup(userSignUp){
    const userExists= await this.findUserByEmail(userSignUp.email)
    if(userExists) throw new BadRequestException('email is not available')
    let user = this.usersRepository.create(userSignUp);
    user = await this.usersRepository.save(user);
    return user;
  }


  async signin(userSignInDto: UserSignInDto) {
    const userExists = await this.findUserByEmail(userSignInDto.email);
    //if(userExists) throw new BadRequestException('email is not available')
    return userExists;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('user not found.');
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByEmail(email:string){
    return await this.usersRepository.findOneBy({email});
  }
}
