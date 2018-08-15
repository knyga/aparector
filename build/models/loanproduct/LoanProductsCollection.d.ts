import Collection from "../../Collection";
import LoanProductModel from "./LoanProductModel";
export default class LoanProductsCollection extends Collection {
    type: string;
    items: LoanProductModel[];
}
