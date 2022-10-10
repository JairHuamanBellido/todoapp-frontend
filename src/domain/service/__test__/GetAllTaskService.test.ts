import { afterEach, describe, expect, it, vi } from 'vitest';
import { HttpClient } from '../../../core/httpClient';
import { Todo } from '../../model/Todo.model';
import { GetAllTaskService } from '../GetAllTaskService';
import { todos } from '../__mocks__/mock';

vi.mock('../../../core/httpClient');

describe('Get All Task Service', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('should return all task', async () => {
    vi.mocked(HttpClient.get).mockReturnValue(Promise.resolve({ data: todos }));

    expect(await (await GetAllTaskService.execute()).length).toBe(1);
  });

  it('should return an empty array', async () => {
    vi.mocked(HttpClient.get).mockReturnValue(Promise.resolve({ data: [] }));

    expect(await (await GetAllTaskService.execute()).length).toBe(0);
  });
});
