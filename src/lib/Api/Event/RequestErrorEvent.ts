import ErrorResponse from '@/lib/Api/Dto/ErrorResponse';

class RequestErrorEvent {
  private response: ErrorResponse;

  constructor(response: ErrorResponse) {
    this.response = response;
  }

  public getResponse(): ErrorResponse {
    return this.response;
  }
}

export default RequestErrorEvent;
