import { PassportValidationRule } from "./passport-validation-rule.class";

export class PassportEyeColorValidationRule extends PassportValidationRule {
    constructor(public value: string) {
        super();
    }

    public isValid(): boolean {
        return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(x => x === this.value);
    }
}