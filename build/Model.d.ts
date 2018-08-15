export default abstract class Model {
    type: string;
    data: any;
    requiredFields: string[];
    optionalFields: string[];
    isValid(): boolean;
    set(key: string, value: any): void;
    get(key: string): any;
    save(): Promise<any>;
}
