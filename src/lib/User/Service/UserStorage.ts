import User from '@/lib/User/Dto/User';
import TokenPair from '@/lib/User/Dto/TokenPair';
import UserStorageInterface from '@/lib/User/Service/UserStorageInterface';
import { injectable } from 'inversify';

const LOCALSTORAGE_KEY = 'user';

@injectable()
class UserStorage implements UserStorageInterface {
  private user: User|undefined = undefined;

  public getCurrent(): User | undefined {
    if (this.user === undefined) {
      const storedData = localStorage.getItem(LOCALSTORAGE_KEY);
      if (storedData !== null) {
        const storedUser = JSON.parse(storedData) as User;
        this.user = new User('');
        Object.assign(this.user, storedUser);
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
