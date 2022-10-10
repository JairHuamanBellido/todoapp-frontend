import { Todo } from '../../../domain/model/Todo.model';
import { Checkbox } from '../checkbox';
import { StyledTodoItemContainer, StyledTodoItemTitle } from './index.styles';

interface ITodoItem {
  todo: Todo;
}
export const TodoItem = ({ todo }: ITodoItem) => {
  return (
    <StyledTodoItemContainer>
      <Checkbox isActive={todo.done} />
      <StyledTodoItemTitle>{todo.title}</StyledTodoItemTitle>
    </StyledTodoItemContainer>
  );
};
