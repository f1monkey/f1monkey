class User {
    private username: string;

    private email: string|undefined;

    constructor(username: string, email?: string|undefined) {
      this.username = username;
      this.email = email;
    }

    public getUsername(): string {
      return this.username;
    }

    public getEmail(): string|undefined {
      return this.email;
    }
}

export default User;
