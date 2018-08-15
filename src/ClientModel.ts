import Model from "./Model";
export default class ClientModel extends Model {
    public type = "clients";
    public requiredFields = ["officeId"];
    public optionalFields = [
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
    // TODO implement additional client model specific validations

}
