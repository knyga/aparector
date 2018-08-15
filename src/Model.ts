import * as _ from "lodash";
import Aparector from "./Aparector";
export default abstract class Model {
    public type: string;
    public requiredFields: string[] = [];
    public validate(): boolean {
        for (const key of this.requiredFields) {
            if (_.isUndefined(this[key])) {
                return false;
            }
        }

        return true;
    }
    public fill(data: any): void {
        for (let i = 0, keys = Object.keys(data); i < keys.length; i++) {
            const key = keys[i];
            const value = data[key];
            this[key] = value;
        }
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
