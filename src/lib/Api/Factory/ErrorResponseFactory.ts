import { AxiosResponse, AxiosError } from 'axios';
import ErrorResponse from '@/lib/Api/Dto/ErrorResponse';
import { TypedJSON } from 'typedjson';
import { injectable } from 'inversify';

const DEFAULT_ERROR = 'Unknown server error';

@injectable()
class ErrorResponseFactory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public create(e: any): ErrorResponse {
    if (!this.isAxiosError(e)) {
      return this.doCreate(DEFAULT_ERROR);
    }

    const { response } = e;
    if (response === undefined || !this.isAxiosResponse(response)) {
      return this.doCreate(DEFAULT_ERROR);
    }

    const serializer = new TypedJSON<ErrorResponse>(ErrorResponse);
    const result = serializer.parse(response.data);
    if (result === undefined) {
      return this.doCreate(DEFAULT_ERROR);
    }

    return result;
  }

  protected doCreate(message: string): ErrorResponse {
    return new ErrorResponse(message);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected isAxiosError(e: any): e is AxiosError {
    return e && e.response;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected isAxiosResponse(response: any): response is AxiosResponse {
    return response
    && response.data !== undefined
    && response.data.message !== undefined
    && typeof response.data.message === 'string';
  }
}

export default ErrorResponseFactory;
