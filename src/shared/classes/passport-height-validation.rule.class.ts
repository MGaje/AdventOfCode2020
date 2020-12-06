import { PassportValidationRule } from "./passport-validation-rule.class";

export class PassportHeightValidationRule extends PassportValidationRule {
    constructor(public value: string) {
        super();
    }

    public isValid(): boolean {
        const cmSplit: string[] = this.value.split('cm');
        const inSplit: string[] = this.value.split('in');

        // cm check.
        if (cmSplit.length === 2) {
            const n: number = +cmSplit[0];
            if (n < 150) {
                return false;
            }

            if (n > 193) {
                return false;
            }

            return true;
        }
        else if (inSplit.length === 2) {
            const n: number = +inSplit[0];
            if (n < 59) {
                return false;
            }

            if (n > 76) {
                return false;
            }

            return true;
        }

        return false;
    }
}