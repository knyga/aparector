import Aparector from "./Aparector";
export default class AparectorHttpBasic extends Aparector {
    public static getInstance(endpoint: string) {
        Aparector.instance = new AparectorHttpBasic(endpoint);
        return Aparector.instance;
    }
    public authorizationType = "Basic";
    public info: any;
    public endpoint: string;
    private constructor(endpoint: string) {
        super();
        this.endpoint = endpoint;
    }
    public async authenticate(username: string, password: string) {
        return this.post(`authentication?username=${username}&password=${password}`)
            .then((info) => this.info = info);
    }
    public getAuthKey(): string {
        if (this.info) {
            return this.info.base64EncodedAuthenticationKey;
        } else {
            return null;
        }
    }
}
