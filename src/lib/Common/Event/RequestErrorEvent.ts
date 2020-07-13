import ErrorResponse from '@/lib/Common/Dto/ErrorResponse';

class RequestErrorEvent {
  public response: ErrorResponse;

  constructor(response: ErrorResponse) {
    this.response = response;
  }
}

export default RequestErrorEvent;
