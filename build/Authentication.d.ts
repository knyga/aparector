export default abstract class Authentication {
    static instance: Authentication;
    abstract authorizationType: string;
    abstract info: any;
    abstract endpoint: string;
    abstract authenticate(username: string, password: string): any;
    abstract getAuthKey(): string;
    getAuthorizationHeader(): string;
    getUrl(resource: any): string;
    request(resource: any, method: any): Promise<any>;
    post(resource: any): Promise<any>;
    get(resource: any): Promise<any>;
    put(resource: any): Promise<any>;
    delete(resource: any): Promise<any>;
}
