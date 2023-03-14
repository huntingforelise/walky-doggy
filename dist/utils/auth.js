var Auth = /** @class */ (function () {
    function Auth() {
        this.authenticated = false;
    }
    Auth.prototype.login = function (cb) {
        this.authenticated = true;
        cb();
    };
    Auth.prototype.logout = function (cb) {
        this.authenticated = false;
        cb();
    };
    Auth.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    return Auth;
}());
export default new Auth();
//# sourceMappingURL=auth.js.map