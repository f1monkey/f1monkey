import ErrorResponse from '@/lib/Api/Dto/ErrorResponse';

class RequestErrorEvent {
  public response: ErrorResponse;

  constructor(response: ErrorResponse) {
    this.response = response;
  }
}

export default RequestErrorEvent;
