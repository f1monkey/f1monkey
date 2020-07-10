class TokenPair {
  private accessToken: string;

  private refreshToken: string;

  constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }

  public setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
  }
}

export default TokenPair;
