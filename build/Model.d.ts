export default class Model {
    type: string;
    requiredFields: string[];
    id: number;
    data: any;
    constructor(id?: any);
    checkIsValid(): boolean;
    set(key: string, value: any): void;
    get(key: string): any;
    save(isShouldBeValid?: boolean): Promise<any>;
    read(options?: any): Promise<any>;
}
