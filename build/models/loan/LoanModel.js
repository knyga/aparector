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
var Aparector_1 = require("../../Aparector");
var Model_1 = require("../../Model");
var LoanModel = /** @class */ (function (_super) {
    __extends(LoanModel, _super);
    function LoanModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "loans";
        _this.requiredFields = [
            "clientId",
            "productId",
            "principal",
            "loanTermFrequency",
            "loanTermFrequencyType",
            "loanType",
            "numberOfRepayments",
            "repaymentEvery",
            "repaymentFrequencyType",
            "interestRatePerPeriod",
            "amortizationType",
            "interestType",
            "interestCalculationPeriodType",
            "transactionProcessingStrategyId",
            "expectedDisbursementDate",
            "submittedOnDate",
            "loanType",
        ];
        return _this;
    }
    // TODO implement additional loan model specific validations
    // TODO specify format for approveData
    LoanModel.prototype.approve = function (approveData) {
        return Aparector_1.default.instance.post(this.type + "/" + this.id + "?command=approve", approveData);
    };
    // TODO specify format for rejectData
    LoanModel.prototype.reject = function (rejectData) {
        return Aparector_1.default.instance.post(this.type + "/" + this.id + "?command=reject", rejectData);
    };
    // TODO specify format for withdrawnData
    LoanModel.prototype.withdrawn = function (withdrawnData) {
        return Aparector_1.default.instance.post(this.type + "/" + this.id + "?command=withdrawnByApplicant", withdrawnData);
    };
    return LoanModel;
}(Model_1.default));
exports.default = LoanModel;
