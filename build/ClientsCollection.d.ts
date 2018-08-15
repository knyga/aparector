import ClientModel from "./ClientModel";
import Collection from "./Collection";
export default class ClientsCollection extends Collection {
    type: string;
    items: ClientModel[];
}
