"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Authentication = /** @class */ (function () {
    function Authentication() {
    }
    Authentication.prototype.getAuthorizationHeader = function () {
        return this.authorizationType + " " + this.getAuthKey();
    };
    return Authentication;
}());
exports.Authentication = Authentication;
