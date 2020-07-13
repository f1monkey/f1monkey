import ApiClientInterface from '@/lib/Common/Service/ApiClientInterface';
import EventDispatcherInterface from '@/lib/Common/Service/EventDispatcherInterface';
import { injectable, inject } from 'inversify';
import RequestErrorEvent from '@/lib/Common/Event/RequestErrorEvent';
import ErrorResponseFactory from '@/lib/Common/Factory/ErrorResponseFactory';
import SERVICES from '@/lib/Common/services';

@injectable()
class InternalApiClientErrorProxy implements ApiClientInterface {
  constructor(
    @inject(SERVICES.InternalApiClientImpl) private client: ApiClientInterface,
    @inject(SERVICES.EventDispatcherInterface) private dispatcher: EventDispatcherInterface,
    @inject(SERVICES.ErrorResponseFactory) private factory: ErrorResponseFactory,
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
