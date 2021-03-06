import Authentication from "./Authentication";
export default class AuthenticationHttpBasic extends Authentication {
    static getInstance(endpoint: string): any;
    authorizationType: string;
    info: any;
    endpoint: string;
    private constructor();
    authenticate(username: string, password: string): Promise<any>;
    getAuthKey(): string;
}
