import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  throttle: jest.fn((fn) => fn),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('throttledGetDataFromApi', () => {
  let mockAxiosInstance: jest.Mocked<AxiosInstance>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockAxiosInstance = {
      get: jest.fn(),
    } as unknown as jest.Mocked<AxiosInstance>;
    mockedAxios.create.mockReturnValue(mockAxiosInstance);
  });

  test('should create instance with provided base url', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: {} });

    await throttledGetDataFromApi('/test');
    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: {} });

    await throttledGetDataFromApi('/users');
    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/users');
  });

  test('should return response data', async () => {
    const mockData = { id: 1, name: 'John Doe' };
    mockAxiosInstance.get.mockResolvedValue({ data: mockData });

    const result = await throttledGetDataFromApi('/users/1');
    expect(result).toEqual(mockData);
  });
});
