export abstract class Authentication {
    public abstract authorizationType: string;
    public abstract info: any;
    public abstract endpoint: string;
    public abstract async authenticate(username: string, password: string);
    public abstract getAuthKey(): string;
    public getAuthorizationHeader(): string {
        return `${this.authorizationType} ${this.getAuthKey()}`;
    }
}
