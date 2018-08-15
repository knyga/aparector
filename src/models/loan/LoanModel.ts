import Model from "../../Model";
export default class LoanModel extends Model {
    public type = "loans";
    public requiredFields = [
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
    // TODO implement additional loan model specific validations
}
