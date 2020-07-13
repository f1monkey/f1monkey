import User from '@/lib/InternalApi/Dto/User';
import TokenPair from '@/lib/InternalApi/Dto/TokenPair';
import UserStorageInterface from '@/lib/InternalApi/Service/UserStorageInterface';
import { injectable } from 'inversify';
import { deserialize } from 'typescript-json-serializer';

const LOCALSTORAGE_KEY = 'user';

@injectable()
class UserStorage implements UserStorageInterface {
  private user: User|undefined = undefined;

  public getCurrent(): User | undefined {
    if (this.user === undefined) {
      const storedData = localStorage.getItem(LOCALSTORAGE_KEY);
      if (storedData !== null) {
        this.user = deserialize(JSON.parse(storedData), User);
      }
    }

    return this.user;
  }

  public updateTokens(tokens: TokenPair): void {
    const user = this.getCurrent();
    if (user === undefined) {
      throw new Error('User is not authenticated');
    }

    user.setTokens(tokens);
    this.setCurrent(user);
  }

  public setCurrent(user: User | undefined): void {
    this.user = user;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
  }
}

export default UserStorage;
