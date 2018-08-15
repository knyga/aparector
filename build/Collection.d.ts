import Model from "./Model";
export default class Collection {
    type: string;
    items: Model[];
    read(options?: any): Promise<any>;
}
