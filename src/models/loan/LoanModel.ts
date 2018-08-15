import Aparector from "../../Aparector";
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
    // TODO specify format for approveData
    public approve(approveData?: any) {
        return Aparector.instance.post(`${this.type}/${this.id}?command=approve`, approveData);
    }
    // TODO specify format for rejectData
    public reject(rejectData?: any) {
        return Aparector.instance.post(`${this.type}/${this.id}?command=reject`, rejectData);
    }
    // TODO specify format for withdrawnData
    public withdrawn(withdrawnData?: any) {
        return Aparector.instance.post(`${this.type}/${this.id}?command=withdrawnByApplicant`, withdrawnData);
    }
}
