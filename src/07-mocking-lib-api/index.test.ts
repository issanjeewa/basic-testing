// Uncomment the code below and write your tests
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('lodash', () => ({
  throttle: jest.fn((fn) => fn),
}));

describe('throttledGetDataFromApi', () => {
  const mockGet = jest.fn();
  const mockResponse = { data: 'dummy data' };
  const mockRelativePath = '/test/1';

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(axios, 'create').mockReturnValue({
      get: mockGet,
    } as unknown as AxiosInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create instance with provided base url', async () => {
    // Write your test here
    mockGet.mockResolvedValue(mockResponse);
    await throttledGetDataFromApi(mockRelativePath);

    const axiosParams: AxiosRequestConfig = {
      baseURL: 'https://jsonplaceholder.typicode.com',
    };

    expect(axios.create).toHaveBeenCalledWith(axiosParams);
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    mockGet.mockResolvedValue(mockResponse);
    await throttledGetDataFromApi(mockRelativePath);
    expect(mockGet).toHaveBeenCalledWith(mockRelativePath);
  });

  test('should return response data', async () => {
    // Write your test here
    mockGet.mockResolvedValue(mockResponse);
    const result = await throttledGetDataFromApi(mockRelativePath);
    expect(result).toEqual(mockResponse.data);
  });
});
