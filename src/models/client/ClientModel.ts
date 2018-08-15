import Model from "../../Model";
export default class ClientModel extends Model {
    public type = "clients";
    public requiredFields = ["officeId"];
    // TODO implement additional client model specific validations
}
