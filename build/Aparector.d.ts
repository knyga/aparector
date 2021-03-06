export default abstract class Aparector {
    static instance: Aparector;
    abstract authorizationType: string;
    abstract info: any;
    abstract endpoint: string;
    abstract authenticate(username: string, password: string): any;
    abstract getAuthKey(): string;
    getAuthorizationHeader(): string;
    getUrl(resource: any): string;
    request(resource: any, method: any, body?: any): Promise<any>;
    post(resource: any, body?: any): Promise<any>;
    get(resource: any): Promise<any>;
    put(resource: any, body?: any): Promise<any>;
    delete(resource: any): Promise<any>;
}
