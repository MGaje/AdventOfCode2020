import { IValidateable } from "../interfaces";

export abstract class PassportValidationRule implements IValidateable {
    constructor() {
        // Empty.
    }

    public abstract isValid(): boolean;
}