import ObjectPrototypeInterface from "./object-prototype.interface";

class ObjectPrototype implements ObjectPrototypeInterface {
    private fieldValue: string;

    public setFieldValue = (fieldValue: string): void => {
        this.fieldValue = fieldValue;
    }

    public getFieldValue = (): string => {
        return this.fieldValue;
    }

    // BE CAREFUL! This is a shallow copy
    public cloneObject = (): this => {
        return Object.assign({}, { ...this });
    }
}

export default ObjectPrototype;
