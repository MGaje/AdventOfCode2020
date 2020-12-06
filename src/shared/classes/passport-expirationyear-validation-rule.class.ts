import { PassportValidationRule } from "./passport-validation-rule.class";

export class PassportExpirationYearValidationRule extends PassportValidationRule {
    constructor(public value: string) {
        super();
    }

    public isValid(): boolean {
        if (this.value.length !== 4) {
            return false;
        }

        if (+this.value < 2020) {
            return false;
        }

        if (+this.value > 2030) {
            return false;
        }

        return true;
    }
}