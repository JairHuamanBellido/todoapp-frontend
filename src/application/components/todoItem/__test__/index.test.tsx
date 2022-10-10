import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TodoItem } from '..';
import { renderAllProviders } from '../../../../utils/renderAllProvider';

describe('Todo Item', () => {
  it('should be render without crashing', () => {
    renderAllProviders(
      <TodoItem todo={{ done: false, id: 'task1', title: 'Todo #1' }} />
    );
    expect(screen.getByText('Todo #1')).toBeInTheDocument();
  });
});
