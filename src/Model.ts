import * as _ from "lodash";
import Aparector from "./Aparector";
export default abstract class Model {
    public type: string;
    public data: any = {};
    public requiredFields: string[] = [];
    public optionalFields: string[] = [];
    public isValid(): boolean {
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
    // TODO add possibility to work with generic options (Restrict Returned Fields, Pretty JSON Formatting)
    // TODO check if validation should be done before saving or if it should be parameterized
    public save() {
        return Aparector.instance.post(this.type, this.data);
    }
    // public push() {
    //     return fetch(`${Authentication.endpoint}authentication?username=${username}&password=${password}`, {
    //         headers: {
    //             "Content-Type": "application/json; charset=utf-8",
    //             "Fineract-Platform-TenantId": "default",
    //         },
    //         method: "POST",
    //     }).then((res) => {
    //         if (res.status === 200) {
    //             return res.json();
    //         } else {
    //             throw new Error("Authorization failed");
    //         }
    //     }).then((info) => this.info = info);
    // }
}
