import User from '@/lib/InternalApi/Dto/User';
import UserResponse from '@/lib/InternalApi/Dto/Response/UserResponse';
import TokenResponse from '@/lib/InternalApi/Dto/Response/TokenResponse';

interface AuthServiceInterface
{
  login(user: User): Promise<UserResponse>;

  loginConfirm(user: User, code: string): Promise<TokenResponse>;

  register(user: User): Promise<UserResponse>;

  isAuthenticated(): boolean;

  isLoggingIn(): boolean;

  isConfirmingLogIn(): boolean;
}

export default AuthServiceInterface;
