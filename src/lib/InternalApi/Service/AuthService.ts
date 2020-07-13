import AuthServiceInterface from '@/lib/InternalApi/Service/AuthServiceInterface';
import API_SERVICES from '@/lib/Common/services';
import USER_SERVICES from '@/lib/InternalApi/services';
import ApiClientInterface from '@/lib/Common/Service/ApiClientInterface';
import LoginConfirmRequest from '@/lib/InternalApi/Dto/Request/LoginConfirmRequest';
import LoginRequest from '@/lib/InternalApi/Dto/Request/LoginRequest';
import RegisterRequest from '@/lib/InternalApi/Dto/Request/RegisterRequest';
import User from '@/lib/InternalApi/Dto/User';
import { inject, injectable } from 'inversify';
import UserStorageInterface from '@/lib/InternalApi/Service/UserStorageInterface';
import UserResponse from '@/lib/InternalApi/Dto/Response/UserResponse';
import TokenResponse from '@/lib/InternalApi/Dto/Response/TokenResponse';

@injectable()
class AuthService implements AuthServiceInterface {
  constructor(
    @inject(API_SERVICES.InternalApiClient) private client: ApiClientInterface,
    @inject(USER_SERVICES.UserStorageInterface) private storage: UserStorageInterface,
  ) {}

  public async login(user: User): Promise<UserResponse> {
    const request = new LoginRequest(user.getUsername());
    const response = await this.client.post<UserResponse>('/v1/auth/login', request);

    return response;
  }

  public async loginConfirm(user: User, code: string): Promise<TokenResponse> {
    const request = new LoginConfirmRequest(user.getUsername(), code);
    const response = await this.client.post<TokenResponse>('/v1/auth/confirm', request);

    return response;
  }

  public async register(user: User): Promise<UserResponse> {
    const request = new RegisterRequest(user.getUsername(), user.getEmail() ?? '');
    const response = await this.client.post<UserResponse>('/v1/auth/register', request);

    return response;
  }

  public isAuthenticated(): boolean {
    const user = this.storage.getCurrent();
    return user !== undefined && user.getTokens() !== undefined;
  }

  public isLoggingIn(): boolean {
    const user = this.storage.getCurrent();

    return user !== undefined && user.getTokens() === undefined;
  }

  public isConfirmingLogIn(): boolean {
    const user = this.storage.getCurrent();

    return user !== undefined
    && user.getTokens() === undefined
    && user.getEmail() !== undefined
    && user.getEmail() !== '';
  }
}

export default AuthService;
