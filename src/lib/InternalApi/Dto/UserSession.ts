import UserSessionInfo from '@/lib/InternalApi/Dto/UserSessionInfo';

class UserSession {
  private id: string;

  private createdAt: Date

  private info: UserSessionInfo;

  constructor(id: string, createdAt: Date, info: UserSessionInfo) {
    this.id = id;
    this.createdAt = createdAt;
    this.info = info;
  }

  public getId(): string {
    return this.id;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getInfo(): UserSessionInfo {
    return this.info;
  }
}

export default UserSession;
