import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import EventDispatcherInterface from '@/lib/Event/Service/EventDispatcherInterface';
import { injectable, inject } from 'inversify';
import RequestErrorEvent from '@/lib/Api/Event/RequestErrorEvent';
import ErrorResponseFactory from '@/lib/Api/Factory/ErrorResponseFactory';
import API_SERVICES from '@/lib/Api/services';
import EVENT_SERVICES from '@/lib/Event/services';

@injectable()
class InternalApiClientErrorProxy implements ApiClientInterface {
  constructor(
    @inject(API_SERVICES.InternalApiClientImpl) private client: ApiClientInterface,
    @inject(EVENT_SERVICES.EventDispatcherInterface) private dispatcher: EventDispatcherInterface,
    @inject(API_SERVICES.ErrorResponseFactory) private factory: ErrorResponseFactory,
  ) {}

  async get<T>(url: string, params?: object): Promise<T> {
    try {
      const result = await this.client.get<T>(url, params);

      return result;
    } catch (e) {
      this.handleError(e);
      throw e;
    }
  }

  async post<T>(url: string, data?: object): Promise<T> {
    try {
      const result = await this.client.post<T>(url, data);

      return result;
    } catch (e) {
      this.handleError(e);
      throw e;
    }
  }

  async put<T>(url: string, data?: object): Promise<T> {
    try {
      const result = await this.client.put<T>(url, data);

      return result;
    } catch (e) {
      this.handleError(e);
      throw e;
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const result = await this.client.delete<T>(url);

      return result;
    } catch (e) {
      this.handleError(e);
      throw e;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected handleError(e: any) {
    const errorResponse = this.factory.create(e);

    this.dispatcher.dispatch(new RequestErrorEvent(errorResponse));
  }
}

export default InternalApiClientErrorProxy;
