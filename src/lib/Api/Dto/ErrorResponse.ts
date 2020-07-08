import ErrorResponseError from '@/lib/Api/Dto/ErrorResponseError';
import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';

@jsonObject()
class ErrorResponse {
  @jsonMember
  private message: string

  @jsonArrayMember(ErrorResponseError)
  private errors: ErrorResponseError[]

  constructor(message: string, errors: ErrorResponseError[] = []) {
    this.message = message;
    this.errors = errors;
  }

  public getMessage(): string {
    return this.message;
  }

  public getErrors(): ErrorResponseError[] {
    return this.errors;
  }
}

export default ErrorResponse;
