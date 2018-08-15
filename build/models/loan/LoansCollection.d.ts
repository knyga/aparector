import Collection from "../../Collection";
import LoanModel from "./LoanModel";
export default class LoansCollection extends Collection {
    type: string;
    items: LoanModel[];
}
