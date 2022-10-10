import { HttpClient } from '../core/httpClient';
import { TodoAPI } from './model/TodoApi.model';

export class HttpRestApiTodo {
  public static async getAll() {
    const { data: tasks } = await HttpClient.get<TodoAPI[]>('/tasks');

    return tasks;
  }
}
