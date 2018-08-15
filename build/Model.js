"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Aparector_1 = require("./Aparector");
var Model = /** @class */ (function () {
    function Model() {
        this.data = {};
        this.requiredFields = [];
        this.optionalFields = [];
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
    Model.prototype.isValid = function () {
        for (var _i = 0, _a = this.requiredFields; _i < _a.length; _i++) {
            var key = _a[_i];
            if (_.isUndefined(this.data[key])) {
                return false;
            }
        }
        return true;
    };
    Model.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    Model.prototype.get = function (key) {
        return this.data[key];
    };
    // TODO add possibility to work with generic options (Restrict Returned Fields, Pretty JSON Formatting)
    // TODO check if validation should be done before saving or if it should be parameterized
    Model.prototype.save = function () {
        return Aparector_1.default.instance.post(this.type, this.data);
    };
    return Model;
}());
exports.default = Model;
