import AuthServiceInterface from '@/lib/User/Service/AuthServiceInterface';
import API_SERVICES from '@/lib/Api/services';
import ApiClientInterface from '@/lib/Api/Service/ApiClientInterface';
import LoginConfirmRequest from '@/lib/User/Dto/Request/LoginConfirmRequest';
import LoginRequest from '@/lib/User/Dto/Request/LoginRequest';
import RegisterRequest from '@/lib/User/Dto/Request/RegisterRequest';
import TokenPair from '@/lib/User/Dto/TokenPair';
import User from '@/lib/User/Dto/User';
import { inject, injectable } from 'inversify';

@injectable()
class AuthService implements AuthServiceInterface {
  constructor(@inject(API_SERVICES.ApiClientInterface) private client: ApiClientInterface) {}

  async login(user: User): Promise<User> {
    const request = new LoginRequest(user.getUsername());

    const response = await this.client.post<User>('/v1/auth/login', request);

    return response;
  }

  async loginConfirm(user: User, code: string): Promise<TokenPair> {
    const request = new LoginConfirmRequest(user.getUsername(), code);

    const response = await this.client.post<TokenPair>('/v1/auth/confirm', request);

    return response;
  }

  async register(user: User): Promise<User> {
    const request = new RegisterRequest(user.getUsername(), user.getEmail() ?? '');

    const response = await this.client.post<User>('/v1/auth/register', request);

    return response;
  }
}

export default AuthService;
