import { jsonObject, jsonMember } from 'typedjson';

@jsonObject()
class ErrorResponseError {
  @jsonMember
  public field = '';

  @jsonMember
  public message = '';
}

export default ErrorResponseError;
