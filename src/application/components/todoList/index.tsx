import { Todo } from '../../../domain/model/Todo.model';
import { useGetAllTask } from '../../hooks/useGetAllTask';
import { Spinner } from '../spinner';
import { TodoItem } from '../todoItem';
import {
  StyledEmptyListContainer,
  StyledTodoListContainer,
} from './index.styles';

export const TodoList = () => {
  const { data: tasks = [], isSuccess, isLoading } = useGetAllTask();

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    if (tasks.length) {
      return (
        <StyledTodoListContainer>
          {tasks.map((task) => (
            <TodoItem todo={task} key={task.id} />
          ))}
        </StyledTodoListContainer>
      );
    }
    return (
      <StyledEmptyListContainer>No tasks are created!</StyledEmptyListContainer>
    );
  }

  return <p>Something went wrong!</p>;
};
