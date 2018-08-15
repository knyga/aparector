import Collection from "../../Collection";
import LoanProductModel from "./LoanProductModel";
export default class LoanProductsCollection extends Collection {
    public type = "loanproducts";
    public items: LoanProductModel[] = [];
}
