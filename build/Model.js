"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var queryString = require("query-string");
var Aparector_1 = require("./Aparector");
var Model = /** @class */ (function () {
    function Model(id) {
        this.requiredFields = [];
        this.data = {};
        this.id = id;
    }
    Model.prototype.checkIsValid = function () {
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
    Model.prototype.save = function (isShouldBeValid) {
        if (isShouldBeValid === void 0) { isShouldBeValid = true; }
        if (isShouldBeValid && !this.checkIsValid()) {
            throw new Error("Model is invalid");
        }
        return Aparector_1.default.instance.post(this.type, this.data);
    };
    Model.prototype.read = function (options) {
        var _this = this;
        return Aparector_1.default.instance
            .get(this.type + "/" + this.id + (_.isUndefined(options) ? "" : "?" + queryString.stringify(options)))
            .then(function (data) { return _this.data = data; });
    };
    return Model;
}());
exports.default = Model;
