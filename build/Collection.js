"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var queryString = require("query-string");
var Aparector_1 = require("./Aparector");
var Collection = /** @class */ (function () {
    function Collection() {
        this.items = [];
    }
    Collection.prototype.read = function (options) {
        var _this = this;
        return Aparector_1.default.instance
            .get("" + this.type + (_.isUndefined(options) ? "" : "?" + queryString.stringify(options)))
            .then(function (data) {
            if (data && data.pageItems) {
                _this.items = data.pageItems;
            }
            return data.totalFilteredRecords;
        });
    };
    return Collection;
}());
exports.default = Collection;
