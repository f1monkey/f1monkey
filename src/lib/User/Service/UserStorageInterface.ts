import User from '@/lib/User/Dto/User';
import TokenPair from '@/lib/User/Dto/TokenPair';

interface UserStorageInterface {
  getCurrent(): User | undefined;

  updateTokens(tokens: TokenPair): void;

  setCurrent(user: User | undefined): void;
}

export default UserStorageInterface;
