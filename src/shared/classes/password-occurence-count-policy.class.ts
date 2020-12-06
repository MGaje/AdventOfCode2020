import { BasePasswordPolicy } from "./base-password-policy.class";

export class PasswordOccurrenceCountPolicy extends BasePasswordPolicy {
    constructor(input: string) {
        super(input);
    }

    public hasValidPassword(): boolean {
        const targetOccurrenceCount: number = this._password.split(this._target).length - 1;
        return targetOccurrenceCount >= this._min && targetOccurrenceCount <= this._max;
    }
}