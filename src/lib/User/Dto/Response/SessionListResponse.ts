import SessionResponse from '@/lib/User/Dto/Response/SessionResponse';

class SessionListResponse {
  public items: SessionResponse[]

  constructor(items: SessionResponse[]) {
    this.items = items;
  }
}

export default SessionListResponse;
