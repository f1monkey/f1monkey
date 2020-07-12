import SessionResponse from '@/lib/User/Dto/Response/SessionResponse';
import SessionListResponse from '@/lib/User/Dto/Response/SessionListResponse';
import UserSession from '@/lib/User/Dto/UserSession';

interface SessionFactoryInterface {
  create(response: SessionResponse): UserSession;

  createList(response: SessionListResponse): UserSession[];
}

export default SessionFactoryInterface;
