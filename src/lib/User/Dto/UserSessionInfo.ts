class UserSessionInfo {
  private browser: string;

  private platform: string;

  private ip: string;

  public constructor(browser: string, platform: string, ip: string) {
    this.browser = browser;
    this.platform = platform;
    this.ip = ip;
  }

  public getBrowser(): string {
    return this.browser;
  }

  public getPlatform(): string {
    return this.platform;
  }

  public getIp(): string {
    return this.ip;
  }
}

export default UserSessionInfo;
