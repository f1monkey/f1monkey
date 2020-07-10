import TokenPair from '@/lib/User/Dto/TokenPair';

class User {
    private username: string;

    private email: string|undefined;

    private tokens: TokenPair|undefined;

    constructor(username?: string|undefined, email?: string|undefined) {
      this.username = username ?? '';
      this.email = email;
    }

    public getUsername(): string {
      return this.username;
    }

    public getEmail(): string|undefined {
      return this.email;
    }

    public getTokens(): TokenPair|undefined {
      return this.tokens;
    }

    public setTokens(tokens: TokenPair|undefined): void {
      this.tokens = tokens;
    }
}

export default User;
