"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./Model");
var ClientModel = /** @class */ (function (_super) {
    __extends(ClientModel, _super);
    function ClientModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "clients";
        _this.requiredFields = ["officeId"];
        _this.optionalFields = [
            "groupId",
            "externalId",
            "accountNo",
            "staffId",
            "mobileNo",
            "savingsProductId",
            "genderId",
            "clientTypeId",
            "clientClassificationId",
        ];
        return _this;
        // TODO implement additional client model specific validations
    }
    return ClientModel;
}(Model_1.default));
exports.default = ClientModel;
