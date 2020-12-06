import { PassportValidationRule } from "./passport-validation-rule.class";

export class PassportBirthYearValidationRule extends PassportValidationRule {
    constructor(public value: string) {
        super();
    }

    public isValid(): boolean {
        if (this.value.length !== 4) {
            return false;
        }

        if (+this.value < 1920) {
            return false;
        }

        if (+this.value > 2002) {
            return false;
        }

        return true;
    }
}