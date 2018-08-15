import * as _ from "lodash";
import * as queryString from "query-string";
import Aparector from "./Aparector";
export default class Model {
    // Note: type and requiredFields could be static, but it would make it harder to access them within parent
    public type: string;
    public requiredFields: string[] = [];
    public id: number;
    public data: any = {};
    public constructor(id?) {
        this.id = id;
    }
    public checkIsValid(): boolean {
        for (const key of this.requiredFields) {
            if (_.isUndefined(this.data[key])) {
                return false;
            }
        }

        return true;
    }
    public set(key: string, value: any): void {
        this.data[key] = value;
    }
    public get(key: string): any {
        return this.data[key];
    }
    public save(isShouldBeValid = true) {
        if (isShouldBeValid && !this.checkIsValid()) {
            throw new Error("Model is invalid");
        }

        return Aparector.instance.post(this.type, this.data);
    }
    public read(options?: any) {
        return Aparector.instance
            .get(`${this.type}/${this.id}${_.isUndefined(options) ? "" : "?" + queryString.stringify(options) }`)
            .then((data) => this.data = data);
    }
}
