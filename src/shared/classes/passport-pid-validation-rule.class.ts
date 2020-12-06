import { PassportValidationRule } from "./passport-validation-rule.class";

export class PassportPIDValidationRule extends PassportValidationRule {
    constructor(public value: string) {
        super();
    }

    public isValid(): boolean {
        if (!/^[0-9]{9}$/g.test(this.value)) {
            return false;
        }

        return true;
    }
}