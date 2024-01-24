import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { FindOneParams } from './dto/FindOneParams';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get('/')
  // async findAll() {
  //   return await this.usersService.findAll();
  // }

  // @Get(':id')
  // @UsePipes(new ValidationPipe({ transform: true }))
  // findOne(@Param('id') id: number) {
  //   console.log(id);
  //   console.log(typeof id);
  // }

  @Get('/')
  findOne(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(ids);
    console.log(typeof sort);
  }

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.usersService.createUser(createUserDto);
    return createdUser;
  }
}
