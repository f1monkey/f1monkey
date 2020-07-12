import UserData from '@/lib/User/Dto/Response/UserData';

class SessionResponse {
  public id: string;

  public createdAt: string;

  public userData: UserData

  constructor(id: string, createdAt: string, userData: UserData) {
    this.id = id;
    this.createdAt = createdAt;
    this.userData = userData;
  }
}

export default SessionResponse;
