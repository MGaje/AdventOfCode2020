import { BaseDay, BasePasswordPolicy, PasswordOccurrenceCountPolicy, PasswordOcurrencePositionPolicy } from "./shared/classes";

export class Day2 extends BaseDay<number> {
    constructor() {
        super('../input/day2.txt');
    }

    public runPart1(): number {
        return this._getValidPasswordCount(PasswordOccurrenceCountPolicy);
    }

    public runPart2(): number {
        return this._getValidPasswordCount(PasswordOcurrencePositionPolicy);
    }

    private _getValidPasswordCount<T extends BasePasswordPolicy>(TCtor: new (...args: any[]) => T): number {
        return this._input.map(x => new TCtor(x)).filter(x => x.hasValidPassword()).length;
    }
}