import TokenPair from '@/lib/Auth/Dto/TokenPair';
import User from '@/lib/Auth/Dto/User';

interface AuthServiceInterface
{
  login(user: User): Promise<User>;

  loginConfirm(user: User, code: string): Promise<TokenPair>;
}

export default AuthServiceInterface;
