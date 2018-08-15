import Aparector from "./Aparector";
export default class AparectorHttpBasic extends Aparector {
    static getInstance(endpoint: string): Aparector;
    authorizationType: string;
    info: any;
    endpoint: string;
    private constructor();
    authenticate(username: string, password: string): Promise<any>;
    getAuthKey(): string;
}
