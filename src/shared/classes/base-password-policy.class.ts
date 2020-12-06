import { IValidateablePasswordPolicy } from "../interfaces";

export abstract class BasePasswordPolicy implements IValidateablePasswordPolicy {
    protected _min: number;
    protected _max: number;
    protected _target: string;
    protected _password: string;
    protected _rawInput: string;

    constructor(input: string) {
        this._parseInput(input);
    }

    public get min(): number  {
        return this._min;
    }

    public get max(): number {
        return this._max;
    }

    public get target(): string {
        return this._target;
    }

    public get password(): string {
        return this._password;
    }

    public abstract hasValidPassword(): boolean;

    private _parseInput(input: string): void {
        this._rawInput = input;

        const [policy, password] = this._rawInput.split(':').map(x => x.trim());
        this._password = password;

        const [occurrences, target] = policy.split(' ');
        this._target = target;
        [this._min, this._max] = occurrences.split('-').map(x => +x);
    }
}