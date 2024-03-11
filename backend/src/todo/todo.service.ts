import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo as TodoEntity } from './entities/todo.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  async create({ text, owner, title }: CreateTodoInput): Promise<Todo | null> {
    const createdTodo = await this.prisma.todo.create({
      data: { text, owner, title }
    });

    return createdTodo;
  }

  async findAllByOwner(owner: string): Promise<Todo[]>  {
    const allTodos = await this.prisma.todo.findMany({where: {owner}});

    return allTodos;
  }

  async findOne(id: number): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: {
        id
      }
    });
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
