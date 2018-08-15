import Collection from "../../Collection";
import ClientModel from "./ClientModel";
export default class ClientsCollection extends Collection {
    type: string;
    items: ClientModel[];
}
