import ErrorResponseError from '@/lib/Api/Dto/ErrorResponseError';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
class ErrorResponse {
  @JsonProperty()
  private message: string

  @JsonProperty({ type: ErrorResponseError })
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
