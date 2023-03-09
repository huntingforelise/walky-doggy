class Auth {
  private authenticated: boolean;

  constructor() {
    this.authenticated = false;
  }

  public login(cb: () => void): void {
    this.authenticated = true;
    cb();
  }

  public logout(cb: () => void): void {
    this.authenticated = false;
    cb();
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }
}

export default new Auth();
