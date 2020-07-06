import User from '@/lib/Auth/Dto/User';

interface RegisterServiceInterface
{
  register(user: User): Promise<User>;
}

export default RegisterServiceInterface;
