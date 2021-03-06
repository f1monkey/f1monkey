import User from '@/lib/InternalApi/Dto/User';
import TokenPair from '@/lib/InternalApi/Dto/TokenPair';

interface UserStorageInterface {
  getCurrent(): User | undefined;

  updateTokens(tokens: TokenPair): void;

  setCurrent(user: User | undefined): void;
}

export default UserStorageInterface;
