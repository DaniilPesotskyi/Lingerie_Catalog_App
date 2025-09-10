import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export abstract class BaseService {
  protected axiosInstance: AxiosInstance;

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...defaultHeaders,
      },
      timeout: 10000,
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
        return config;
      },
      (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('Response error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  protected async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(endpoint, { params });
    return response.data;
  }

  protected async post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(endpoint, data, config);
    return response.data;
  }

  protected async put<T>(endpoint: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(endpoint, data);
    return response.data;
  }

  protected async delete<T>(endpoint: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(endpoint);
    return response.data;
  }

  protected async patch<T>(endpoint: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.patch(endpoint, data);
    return response.data;
  }
}
