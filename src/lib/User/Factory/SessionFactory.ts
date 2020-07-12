import SessionResponse from '@/lib/User/Dto/Response/SessionResponse';
import UserSession from '@/lib/User/Dto/UserSession';
import UserSessionInfo from '@/lib/User/Dto/UserSessionInfo';
import SessionListResponse from '@/lib/User/Dto/Response/SessionListResponse';
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
