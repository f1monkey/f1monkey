import UserSession from '@/lib/User/Dto/UserSession';

import { inject, injectable } from 'inversify';
import USER_SERVICES from '@/lib/User/services';
import SessionFactoryInterface from '@/lib/User/Factory/SessionFactoryInterface';
import API_SERVICES from '@/lib/Api/services';
import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import SessionListResponse from '@/lib/User/Dto/Response/SessionListResponse';
import SessionResponse from '@/lib/User/Dto/Response/SessionResponse';
import SessionServiceInterface from '@/lib/User/Service/SessionServiceInterface';

@injectable()
class SessionService implements SessionServiceInterface {
  constructor(
    @inject(USER_SERVICES.SessionFactoryInterface) private factory: SessionFactoryInterface,
    @inject(API_SERVICES.InternalApiClient) private client: ApiClientInterface,
  ) {}

  public async getList(): Promise<UserSession[]> {
    const response = await this.client.get<SessionListResponse>('/v1/sessions');

    return this.factory.createList(response);
  }

  public async delete(id: string): Promise<UserSession> {
    const response = await this.client.delete<SessionResponse>('/v1/sessions/{id}'.replace('{id}', id));

    return this.factory.create(response);
  }
}

export default SessionService;
