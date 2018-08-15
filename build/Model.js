"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Model = /** @class */ (function () {
    function Model() {
        this.requiredFields = [];
        // public push() {
        //     return fetch(`${Authentication.endpoint}authentication?username=${username}&password=${password}`, {
        //         headers: {
        //             "Content-Type": "application/json; charset=utf-8",
        //             "Fineract-Platform-TenantId": "default",
        //         },
        //         method: "POST",
        //     }).then((res) => {
        //         if (res.status === 200) {
        //             return res.json();
        //         } else {
        //             throw new Error("Authorization failed");
        //         }
        //     }).then((info) => this.info = info);
        // }
    }
    Model.prototype.validate = function () {
        for (var _i = 0, _a = this.requiredFields; _i < _a.length; _i++) {
            var key = _a[_i];
            if (_.isUndefined(this[key])) {
                return false;
            }
        }
        return true;
    };
    Model.prototype.fill = function (data) {
        for (var i = 0, keys = Object.keys(data); i < keys.length; i++) {
            var key = keys[i];
            var value = data[key];
            this[key] = value;
        }
    };
    return Model;
}());
exports.default = Model;
