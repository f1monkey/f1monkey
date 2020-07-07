import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import ApiClient from '@/lib/Api/Service/ApiClient';
import EventDispatcher from '@/lib/Event/Service/EventDispatcher';
import EventDispatcherInterface from '@/lib/Event/Service/EventDispatcherInterface';
import { AxiosError, AxiosResponse } from 'axios';
import { injectable, inject } from 'tsyringe';

@injectable()
class ApiClientErrorProxy implements ApiClientInterface {
  constructor(
    @inject(ApiClient) private client: ApiClientInterface,
    @inject(EventDispatcher) private dispatcher: EventDispatcherInterface,
  ) {}

  async get<T>(url: string, params?: object): Promise<T> {
    try {
      const result = await this.client.get<T>(url, params);

      return result;
    } catch (e) {
      if (this.isAxiosError(e)) {
        console.dir(e.response);
      }
      throw e;
    }
  }

  async post<T>(url: string, data?: object): Promise<T> {
    try {
      const result = await this.client.post<T>(url, data);

      return result;
    } catch (e) {
      if (this.isAxiosError(e)) {
        console.dir(e.response);
      }
      throw e;
    }
  }

  async put<T>(url: string, data?: object): Promise<T> {
    try {
      const result = await this.client.put<T>(url, data);

      return result;
    } catch (e) {
      if (this.isAxiosError(e)) {
        console.dir(e.response);
      }
      throw e;
    }
  }

  async delete<T>(url: string, data?: object): Promise<T> {
    try {
      const result = await this.client.delete<T>(url, data);

      return result;
    } catch (e) {
      if (this.isAxiosError(e)) {
        console.dir(e.response);
      }
      throw e;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected isAxiosError(e: any): e is AxiosError {
    return e && e.response && this.isAxiosResponse(e.response);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected isAxiosResponse(response: any): response is AxiosResponse {
    return response && response.data !== undefined;
  }
}

export default ApiClientErrorProxy;
