import { PassportValidationRule } from "./passport-validation-rule.class";

export class PassportHairColorValidationRule extends PassportValidationRule {
    constructor(public value: string) {
        super();
    }

    public isValid(): boolean {
        if (!/^#[0-9a-f]{6}$/g.test(this.value)) {
            return false;
        }

        return true;
    }
}