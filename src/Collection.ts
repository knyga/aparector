import * as _ from "lodash";
import * as queryString from "query-string";
import Aparector from "./Aparector";
import Model from "./Model";
export default class Collection {
    public type: string;
    public items: Model[] = [];
    public read(options?: any) {
        return Aparector.instance
            .get(`${this.type}${_.isUndefined(options) ? "" : "?" + queryString.stringify(options) }`)
            .then((data) => {
                if (data && data.length) {
                    this.items = data;
                    return data.length;
                }

                if (data && data.pageItems) {
                    this.items = data.pageItems;
                }

                return data.totalFilteredRecords || 0;
            });
    }
}
