export declare abstract class Authentication {
    abstract authorizationType: string;
    abstract info: any;
    abstract endpoint: string;
    abstract authenticate(username: string, password: string): any;
    abstract getAuthKey(): string;
    getAuthorizationHeader(): string;
}
