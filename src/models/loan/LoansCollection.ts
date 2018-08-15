import Collection from "../../Collection";
import LoanModel from "./LoanModel";
export default class LoansCollection extends Collection {
    public type = "loans";
    public items: LoanModel[] = [];
}
