import { HttpRestApiTodo } from '../../infrastructure/HttpRestApiTodo';
import { Todo } from '../model/Todo.model';

export class GetAllTaskService {
  public static async execute(): Promise<Todo[]> {
    const tasks = await HttpRestApiTodo.getAll();
    return tasks;
  }
}
