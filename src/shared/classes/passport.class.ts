import { IValidateable } from "../interfaces";

export class Passport implements IValidateable {
    public byr: string;
    public iyr: string;
    public eyr: string;
    public hgt: string;
    public hcl: string;
    public ecl: string;
    public pid: string;
    public cid: string;

    protected _input: string;

    constructor(input: string) {
        this._input = input;
        this._parseInput();
    }

    public get value(): string {
        return this._input;
    }

    public isValid(): boolean {
        if (!this.byr) {
            return false;
        }

        if (!this.iyr) {
            return false;
        }

        if (!this.eyr) {
            return false;
        }

        if (!this.hgt) {
            return false;
        }

        if (!this.hcl) {
            return false;
        }

        if (!this.ecl) {
            return false;
        }

        if (!this.pid) {
            return false;
        }

        // Missing cid is fine.

        return true;
    }

    private _parseInput(): void {
        const pairs: string[] = this._input.split(' ');
        const json: string = `{ ${pairs.map(x => x.split(':')).map(x => x.map(y => `"${y}"`)).map(x => x.join(':')).join(', ')} }`;

        Object.assign(this, JSON.parse(json));
    }
}