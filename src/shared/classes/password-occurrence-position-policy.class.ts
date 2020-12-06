import { BasePasswordPolicy } from "./base-password-policy.class";

export class PasswordOcurrencePositionPolicy extends BasePasswordPolicy {
    constructor(input: string) {
        super(input);
    }

    public hasValidPassword(): boolean {
        const zeroBasedMin: number = this._min - 1;
        const zeroBasedMax: number = this._max - 1;

        if (zeroBasedMin < 0 || zeroBasedMax >= this._password.length) {
            return false;
        }

        const occursAtMinPos: boolean = this._password[zeroBasedMin] === this._target;
        const occursAtMaxPos: boolean = this._password[zeroBasedMax] === this._target;

        return occursAtMinPos !== occursAtMaxPos;
    }
}