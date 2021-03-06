import ApiClientInterface from '@/lib/Common/Service/ApiClientInterface';
import { injectable, inject } from 'inversify';
import UserStorageInterface from '@/lib/InternalApi/Service/UserStorageInterface';
import USER_SERVICES from '@/lib/InternalApi/services';
import AbstractApiClient from '@/lib/Common/Service/AbstractApiClient';

@injectable()
class InternalApiClient extends AbstractApiClient implements ApiClientInterface {
  constructor(
    @inject(USER_SERVICES.UserStorageInterface) private userStorage: UserStorageInterface,
  ) {
    super();
  }

  public async get<T>(url: string, params?: object): Promise<T> {
    const response = await this.sendGet<T>(url, { headers: this.getHeaders(), params });

    return response;
  }

  public async post<T>(url: string, data?: object): Promise<T> {
    const response = await this.sendPost<T>(url, data, { headers: this.getHeaders() });

    return response;
  }

  public async put<T>(url: string, data?: object): Promise<T> {
    const response = await this.sendPut<T>(url, data, { headers: this.getHeaders() });

    return response;
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await this.sendDelete<T>(url, { headers: this.getHeaders() });

    return response;
  }

  protected getHeaders(): object {
    const user = this.userStorage.getCurrent();
    if (user === undefined) {
      return {};
    }

    const tokens = user.getTokens();
    if (tokens === undefined) {
      return {};
    }

    return {
      Authorization: 'Bearer {token}'.replace('{token}', tokens.getAccessToken()),
    };
  }
}

export default InternalApiClient;
