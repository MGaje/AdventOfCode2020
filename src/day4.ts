import { BaseDay } from "./shared/classes";
import { Passport } from "./shared/classes/passport.class";
import { SecurePassport } from "./shared/classes/secure-passport.class";

export class Day4 extends BaseDay<number> {
    private _passports: Passport[] = [];

    constructor() {
        super('../input/day4.txt');
    }

    public runPart1(): number {
        this._parseInputForPassports(Passport);
        return this._passports.filter(x => x.isValid()).length;
    }

    public runPart2(): number {
        this._parseInputForPassports(SecurePassport);
        return this._passports.filter(x => x.isValid()).length;
    }

    private _parseInputForPassports<T extends Passport>(TCtor: new (...args: any[]) => T): void {
        let parsedPassportInput: string = '';

        for (let i: number = 0; i < this._input.length + 1; i++) {
            if (!this._input[i]) {
                this._passports.push(new TCtor(parsedPassportInput));
                parsedPassportInput = '';
                continue;
            }

            parsedPassportInput += (parsedPassportInput.length > 0) ? ` ${this._input[i]}` : this._input[i];
        }
    }
}