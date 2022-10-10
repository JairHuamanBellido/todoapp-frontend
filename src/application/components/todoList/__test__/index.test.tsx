import { cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TodoList } from '..';
import { renderAllProviders } from '../../../../utils/renderAllProvider';
import { useGetAllTask } from '../../../hooks/useGetAllTask';
import { mockTodoList } from '../__mocks__/index.mock';
vi.mock('../../../hooks/useGetAllTask');

describe('Todo List', () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });
  it('should be render without crashing', () => {
    vi.mocked(useGetAllTask).mockImplementation(
      vi.fn().mockReturnValue({
        data: mockTodoList,
        isSuccess: true,
        isLoading: false,
      })
    );
    renderAllProviders(<TodoList />);

    expect(screen.getByText('Title #1')).toBeInTheDocument();
    expect(screen.getByText('Title #2')).toBeInTheDocument();
  });

  it('should be render a spinner when is loading', () => {
    vi.mocked(useGetAllTask).mockImplementation(
      vi.fn().mockReturnValue({
        data: undefined,
        isSuccess: false,
        isLoading: true,
      })
    );
    const { container } = renderAllProviders(<TodoList />);

    expect(
      container.querySelector('div[data-component="spinner"]')
    ).toBeInTheDocument();
  });
  it('should be render a message if data is empty', () => {
    vi.mocked(useGetAllTask).mockImplementation(
      vi.fn().mockReturnValue({
        data: [],
        isSuccess: true,
        isLoading: false,
      })
    );
    renderAllProviders(<TodoList />);

    expect(screen.getByText('No tasks are created!')).toBeInTheDocument();
  });

  it('should be render a message if failed', () => {
    vi.mocked(useGetAllTask).mockImplementation(
      vi.fn().mockReturnValue({
        data: undefined,
        isSuccess: false,
        isLoading: false,
      })
    );
    renderAllProviders(<TodoList />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });
});
