import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo as TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodoService {
  create(createTodoInput: CreateTodoInput) {
    const returnData: TodoEntity = {
      id: 1,
      text: "create",
      imageUrl: "http",
      owner: "12"
    }

    return returnData;
  }

  findAll() {
    const returnData: TodoEntity[] = [{
      id: 1,
      text: "findAll1",
      imageUrl: "http",
      owner: "12"
    },{
      id: 2,
      text: "findAll2",
      imageUrl: "http",
      owner: "12"
    },{
      id: 3,
      text: "findAll3",
      imageUrl: "http",
      owner: "12"
    }]

    return returnData;
  }

  findOne(id: number) {
    const returnData: TodoEntity = {
      id: 1,
      text: "findOne",
      imageUrl: "http",
      owner: "12"
    }

    return returnData;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    const returnData: TodoEntity = {
      id: 1,
      text: "update",
      imageUrl: "http",
      owner: "12"
    }

    return returnData;
  }

  remove(id: number) {
    const returnData: TodoEntity = {
      id: 1,
      text: "remove",
      imageUrl: "http",
      owner: "12"
    }

    return returnData;
  }
}
