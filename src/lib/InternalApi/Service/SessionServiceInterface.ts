import UserSession from '@/lib/InternalApi/Dto/UserSession';

interface SessionServiceInterface {
  getList(): Promise<UserSession[]>;

  delete(id: string): Promise<UserSession>;
}

export default SessionServiceInterface;
