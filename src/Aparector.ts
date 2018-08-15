import * as _ from "lodash";
import fetch from "node-fetch";
export default abstract class Aparector {
    public static instance: Aparector;
    public abstract authorizationType: string;
    public abstract info: any;
    public abstract endpoint: string;
    public abstract async authenticate(username: string, password: string);
    public abstract getAuthKey(): string;
    public getAuthorizationHeader(): string {
        return `${this.authorizationType} ${this.getAuthKey()}`;
    }
    public getUrl(resource): string {
        return `${this.endpoint}${resource}`;
    }
    public async request(resource, method) {
        const headers: any = {
            "Content-Type": "application/json; charset=utf-8",
            "Fineract-Platform-TenantId": "default",
        };
        if (_.isUndefined(this.getAuthKey())) {
            headers.authorization = this.getAuthorizationHeader();
        }
        return fetch(this.getUrl(resource), {
            headers,
            method,
        }).then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error("Request failed");
            }
        });
    }
    public async post(resource) {
        return this.request(resource, "post");
    }
    public async get(resource) {
        return this.request(resource, "get");
    }
    public async put(resource) {
        return this.request(resource, "put");
    }
    public async delete(resource) {
        return this.request(resource, "delete");
    }
}
