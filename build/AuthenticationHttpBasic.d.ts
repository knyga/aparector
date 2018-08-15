import { Authentication } from "./Authentication";
export declare class AuthenticationHttpBasic extends Authentication {
    authorizationType: string;
    info: any;
    endpoint: string;
    constructor(endpoint: string);
    authenticate(username: string, password: string): Promise<any>;
    getAuthKey(): string;
}
