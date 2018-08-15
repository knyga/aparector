import * as _ from "lodash";
import fetch from "node-fetch";
export default abstract class Aparector {
    public static instance: Aparector;
    public abstract authorizationType: string;
    public abstract info: any;
    public abstract endpoint: string;
    // TODO read global configurations to get settings like enable-address
    public abstract async authenticate(username: string, password: string);
    public abstract getAuthKey(): string;
    public getAuthorizationHeader(): string {
        return `${this.authorizationType} ${this.getAuthKey()}`;
    }
    public getUrl(resource): string {
        return `${this.endpoint}${resource}`;
    }
    public async request(resource, method, body?) {
        const headers: any = {
            "Content-Type": "application/json; charset=utf-8",
            // TODO clarify if it is dynamic
            "Fineract-Platform-TenantId": "default",
        };
        if (!_.isNull(Aparector.instance.getAuthKey())) {
            headers.authorization = Aparector.instance.getAuthorizationHeader();
        }
        const options: any = {
            headers,
            method,
        };
        if (!_.isUndefined(body)) {
            options.body = JSON.stringify(body);
        }
        return fetch(this.getUrl(resource), options).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(JSON.stringify({status: res.status, json: await res.json()}));
            }
        });
    }
    public async post(resource, body?) {
        return this.request(resource, "post", body);
    }
    public async get(resource) {
        return this.request(resource, "get");
    }
    public async put(resource, body?) {
        return this.request(resource, "put", body);
    }
    public async delete(resource) {
        return this.request(resource, "delete");
    }
}
