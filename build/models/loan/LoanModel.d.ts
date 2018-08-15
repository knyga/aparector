import Model from "../../Model";
export default class LoanModel extends Model {
    type: string;
    requiredFields: string[];
    approve(approveData?: any): Promise<any>;
    reject(rejectData?: any): Promise<any>;
    withdrawn(withdrawnData?: any): Promise<any>;
}
