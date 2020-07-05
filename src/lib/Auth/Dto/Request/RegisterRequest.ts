class RegisterRequest {
  private username: string;

  private email: string;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

  public getUsername(): string {
    return this.username;
  }

  public getEmail(): string {
    return this.email;
  }
}

export default RegisterRequest;
