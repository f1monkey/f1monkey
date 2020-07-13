import SessionResponse from '@/lib/InternalApi/Dto/Response/SessionResponse';

class SessionListResponse {
  public items: SessionResponse[]

  constructor(items: SessionResponse[]) {
    this.items = items;
  }
}

export default SessionListResponse;
