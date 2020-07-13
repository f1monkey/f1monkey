import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
class TokenPair {
  @JsonProperty()
  private accessToken: string;

  @JsonProperty()
  private refreshToken: string;

  @JsonProperty()
  private sessionId: string;

  constructor(accessToken: string, refreshToken: string, sessionId: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.sessionId = sessionId;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }

  public getSessionId(): string {
    return this.sessionId;
  }
}

export default TokenPair;
