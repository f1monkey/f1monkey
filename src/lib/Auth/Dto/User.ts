class User {
    private _username: string;

    private _email: string|undefined;

    constructor(username: string, email?: string|undefined) {
      this._username = username;
      this._email = email;
    }

    public get username(): string {
      return this._username;
    }

    public get email(): string|undefined {
      return this._email;
    }
}

export default User;
