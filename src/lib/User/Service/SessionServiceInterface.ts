import UserSession from '@/lib/User/Dto/UserSession';

interface SessionServiceInterface {
  getList(): Promise<UserSession[]>;

  delete(id: string): Promise<UserSession>;
}

export default SessionServiceInterface;
