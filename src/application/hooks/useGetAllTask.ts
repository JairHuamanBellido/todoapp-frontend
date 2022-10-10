import { useQuery } from '@tanstack/react-query';
import { Todo } from '../../domain/model/Todo.model';
import { GetAllTaskService } from '../../domain/service/GetAllTaskService';

export const useGetAllTask = () => {
  const mutation = useQuery<Todo[]>(
    ['fetchAllTasks'],
    () => GetAllTaskService.execute(),
    { enabled: true }
  );

  return mutation;
};
