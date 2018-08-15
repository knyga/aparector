export default abstract class Model {
    type: string;
    requiredFields: string[];
    validate(): boolean;
    fill(data: any): void;
}
