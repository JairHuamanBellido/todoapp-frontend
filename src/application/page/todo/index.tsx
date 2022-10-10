import { TodoList } from '../../components/todoList';
import {
  StyledSectionContainer,
  StyledTitle,
  StyledTitleContainer,
} from './index.styles';

export const TodoPage = () => {
  return (
    <StyledSectionContainer>
      <StyledTitleContainer>
        <StyledTitle>Todo List</StyledTitle>
      </StyledTitleContainer>
      <TodoList />
    </StyledSectionContainer>
  );
};
