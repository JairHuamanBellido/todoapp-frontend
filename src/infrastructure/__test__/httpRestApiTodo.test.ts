import { afterEach, describe, expect, it, vi } from 'vitest';
import { HttpClient } from '../../core/httpClient';
import { HttpRestApiTodo } from '../HttpRestApiTodo';
import { mockData } from '../__mocks__/mock';

vi.mock('../../core/httpClient');

describe('HttpRestApiTodo', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be return all tasks', async () => {
    vi.mocked(HttpClient.get).mockReturnValue(
      Promise.resolve({ data: mockData })
    );

    expect(await (await HttpRestApiTodo.getAll()).length).toBe(2);
  });

  it('should be return empty tasks', async () => {
    vi.mocked(HttpClient.get).mockReturnValue(Promise.resolve({ data: [] }));
    expect(await (await HttpRestApiTodo.getAll()).length).toBe(0);
  });
});
