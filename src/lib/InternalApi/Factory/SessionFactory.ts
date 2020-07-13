import SessionResponse from '@/lib/InternalApi/Dto/Response/SessionResponse';
import UserSession from '@/lib/InternalApi/Dto/UserSession';
import UserSessionInfo from '@/lib/InternalApi/Dto/UserSessionInfo';
import SessionListResponse from '@/lib/InternalApi/Dto/Response/SessionListResponse';
import { injectable } from 'inversify';

@injectable()
class SessionFactory {
  public create(response: SessionResponse): UserSession {
    const { userData } = response;
    const userInfo = new UserSessionInfo(userData.browser, userData.platform, userData.ip);
    const result = new UserSession(response.id, new Date(response.createdAt), userInfo);

    return result;
  }

  public createList(response: SessionListResponse): UserSession[] {
    return response.items.map(
      (sessionResponse: SessionResponse) => this.create(sessionResponse),
    );
  }
}

export default SessionFactory;
