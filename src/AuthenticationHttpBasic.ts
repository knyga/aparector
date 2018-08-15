import fetch from "node-fetch";
import {Authentication} from "./Authentication";
export class AuthenticationHttpBasic extends Authentication {
    public authorizationType = "Basic";
    public info: any;
    public endpoint: string;
    public constructor(endpoint: string) {
        super();
        this.endpoint = endpoint;
    }
    public async authenticate(username: string, password: string) {
        return fetch(`${this.endpoint}authentication?username=${username}&password=${password}`, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Fineract-Platform-TenantId": "default",
            },
            method: "POST",
        }).then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error("Authorization failed");
            }
        }).then((info) => this.info = info);
    }
    public getAuthKey(): string {
        return this.info.base64EncodedAuthenticationKey;
    }
}
