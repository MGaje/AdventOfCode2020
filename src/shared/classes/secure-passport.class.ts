import { Passport } from "./passport.class";
import { PassportBirthYearValidationRule } from "./passport-birthyear-validation-rule.class";
import { PassportExpirationYearValidationRule } from "./passport-expirationyear-validation-rule.class";
import { PassportEyeColorValidationRule } from "./passport-eyecolor-validation-rule.class";
import { PassportHairColorValidationRule } from "./passport-haircolor-validation-rule.class";
import { PassportHeightValidationRule } from "./passport-height-validation.rule.class";
import { PassportIssueYearValidationRule } from "./passport-issueyear-validation-rule.class";
import { PassportPIDValidationRule } from "./passport-pid-validation-rule.class";
import { PassportValidationRule } from "./passport-validation-rule.class";

export class SecurePassport extends Passport {
    constructor(input: string) {
        super(input);
    }

    public isValid(): boolean {
        if (!this.byr || !this._getValidationRule('byr').isValid()) {
            return false;
        }

        if (!this.iyr || !this._getValidationRule('iyr').isValid()) {
            return false;
        }

        if (!this.eyr || !this._getValidationRule('eyr').isValid()) {
            return false;
        }

        if (!this.hgt || !this._getValidationRule('hgt').isValid()) {
            return false;
        }

        if (!this.hcl || !this._getValidationRule('hcl').isValid()) {
            return false;
        }

        if (!this.ecl || !this._getValidationRule('ecl').isValid()) {
            return false;
        }

        if (!this.pid || !this._getValidationRule('pid').isValid()) {
            return false;
        }

        return true;
    }

    private _getValidationRule(propName: string): PassportValidationRule {
        switch (propName) {
            case 'byr':
                return new PassportBirthYearValidationRule(this.byr);

            case 'iyr':
                return new PassportIssueYearValidationRule(this.iyr);

            case 'eyr':
                return new PassportExpirationYearValidationRule(this.eyr);

            case 'hgt':
                return new PassportHeightValidationRule(this.hgt);

            case 'hcl':
                return new PassportHairColorValidationRule(this.hcl);

            case 'ecl':
                return new PassportEyeColorValidationRule(this.ecl);

            case 'pid':
                return new PassportPIDValidationRule(this.pid);

            default:
                throw new Error('Unsupported property. Cannot validate.')
        }
    }
}