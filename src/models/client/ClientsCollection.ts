import Collection from "../../Collection";
import ClientModel from "./ClientModel";
export default class ClientsCollection extends Collection {
    public type = "clients";
    public items: ClientModel[] = [];
}
