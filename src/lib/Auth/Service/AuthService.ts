import AuthServiceInterface from '@/lib/Auth/Service/AuthServiceInterface';
import LoginConfirmRequest from '@/lib/Auth/Dto/Request/LoginConfirmRequest';
import LoginRequest from '@/lib/Auth/Dto/Request/LoginRequest';
import RegisterRequest from '@/lib/Auth/Dto/Request/RegisterRequest';
import RegisterServiceInterface from '@/lib/Auth/Service/RegisterServiceInterface';
import TokenPair from '@/lib/Auth/Dto/TokenPair';
import User from '@/lib/Auth/Dto/User';
import { postRequest } from '@/lib/Api/Service/ApiClient';

class AuthService implements AuthServiceInterface, RegisterServiceInterface {
  async login(user: User): Promise<User> {
    const request = new LoginRequest(user.getUsername());

    const response = await postRequest<User>('/v1/auth/login', request);

    return response;
  }

  async loginConfirm(user: User, code: string): Promise<TokenPair> {
    const request = new LoginConfirmRequest(user.getUsername(), code);

    const response = await postRequest<TokenPair>('/v1/auth/confirm', request);

    return response;
  }

  async register(user: User): Promise<User> {
    const request = new RegisterRequest(user.getUsername(), user.getEmail() ?? '');

    const response = await postRequest<User>('/v1/auth/confirm', request);

    return response;
  }
}

export default AuthService;
