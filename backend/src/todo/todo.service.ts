import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo as TodoEntity } from './entities/todo.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create({text, owner}: CreateTodoInput) {
    /*
    data: Prisma.TodoCreateInput
    return this.prisma.todo.create({
      data,
    });

    */

    const returnData: TodoEntity = {
      id: 1,
      title: "createTitle",
      text: "create",
      owner: "12"
    }
    
    return returnData;
  }

  findAll() {
    const returnData: TodoEntity[] = [{
      id: 1,
      title: "createTitle1",
      text: "findAll1",
      owner: "12"
    },{
      id: 2,
      title: "createTitle2",
      text: "findAll2",
      owner: "12"
    },{
      id: 3,
      title: "createTitle3",
      text: "findAll3",
      owner: "12"
    }]

    return returnData;
  }

  findOne(id: number) {
    const returnData: TodoEntity = {
      id: 1,
      text: "findOne",
      title: "createTitle1",
      owner: "12"
    }

    return returnData;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    const returnData: TodoEntity = {
      id: 1,
      text: "update",
      title: "createTitle",
      owner: "12"
    }

    return returnData;
  }

  remove(id: number) {
    const returnData: TodoEntity = {
      id: 1,
      title: "createTitle",
      text: "remove",
      owner: "12"
    }

    return returnData;
  }
}
