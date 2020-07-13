import SessionResponse from '@/lib/InternalApi/Dto/Response/SessionResponse';
import SessionListResponse from '@/lib/InternalApi/Dto/Response/SessionListResponse';
import UserSession from '@/lib/InternalApi/Dto/UserSession';

interface SessionFactoryInterface {
  create(response: SessionResponse): UserSession;

  createList(response: SessionListResponse): UserSession[];
}

export default SessionFactoryInterface;
