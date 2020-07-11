import AuthServiceInterface from '@/lib/User/Service/AuthServiceInterface';
import API_SERVICES from '@/lib/Api/services';
import USER_SERVICES from '@/lib/User/services';
import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import LoginConfirmRequest from '@/lib/User/Dto/Request/LoginConfirmRequest';
import LoginRequest from '@/lib/User/Dto/Request/LoginRequest';
import RegisterRequest from '@/lib/User/Dto/Request/RegisterRequest';
import User from '@/lib/User/Dto/User';
import { inject, injectable } from 'inversify';
import UserStorageInterface from '@/lib/User/Service/UserStorageInterface';
import UserResponse from '@/lib/User/Dto/Response/UserResponse';
import TokenResponse from '@/lib/User/Dto/Response/TokenResponse';

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
