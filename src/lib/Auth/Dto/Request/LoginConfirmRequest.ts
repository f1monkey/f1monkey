class LoginConfirmRequest {
  private username: string;

  private authCode: string;

  constructor(username: string, authCode: string) {
    this.username = username;
    this.authCode = authCode;
  }

  public getUsername(): string {
    return this.username;
  }

  public getAuthCode(): string {
    return this.authCode;
  }
}

export default LoginConfirmRequest;
