import UserSession from '@/lib/InternalApi/Dto/UserSession';

import { inject, injectable } from 'inversify';
import INTERNAL_API_SERVICES from '@/lib/InternalApi/services';
import SessionFactoryInterface from '@/lib/InternalApi/Factory/SessionFactoryInterface';
import COMMON_SERVICES from '@/lib/Common/services';
import ApiClientInterface from '@/lib/Common/Service/ApiClientInterface';
import SessionListResponse from '@/lib/InternalApi/Dto/Response/SessionListResponse';
import SessionResponse from '@/lib/InternalApi/Dto/Response/SessionResponse';
import SessionServiceInterface from '@/lib/InternalApi/Service/SessionServiceInterface';

@injectable()
class SessionService implements SessionServiceInterface {
  constructor(
    @inject(INTERNAL_API_SERVICES.SessionFactoryInterface) private factory: SessionFactoryInterface,
    @inject(COMMON_SERVICES.InternalApiClient) private client: ApiClientInterface,
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
