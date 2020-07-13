import TokenPair from '@/lib/InternalApi/Dto/TokenPair';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
class User {
  @JsonProperty()
  private username: string;

  @JsonProperty()
  private email: string|undefined;

  @JsonProperty({
    predicate: (property: Record<string, string>|undefined) => {
      if (property && property.accessToken !== undefined) {
        return TokenPair;
      }

      return undefined;
    },
  })
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
