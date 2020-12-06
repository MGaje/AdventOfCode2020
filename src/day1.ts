
import * as combinations from 'combinations';
import { BaseDay } from './shared/classes';

export class Day1 extends BaseDay<number | null> {

    constructor() {
        super('../input/day1.txt');
    }

    public getCombinations(size: number): number[][] {
        // Using maps like I'm a cartographer! *finger guns*
        return combinations(this._input, size, size).map(outer => outer.map(inner => +inner));
    }

    public findTargetResult(comboSize: number, target: number): number | null {
        let parsedResult: number | null = null;

        this.getCombinations(comboSize).forEach(combo => {
            const sum: number = combo.reduce((acc, v) => acc + v, 0);

            if (sum === target) {
                parsedResult = combo.reduce((acc, v) => acc * v, 1);
                return;
            }
        });

        return parsedResult;
    }

    public runPart1(): number | null {
        return this.findTargetResult(2, 2020);
    }

    public runPart2(): number | null {
        return this.findTargetResult(3, 2020);
    }
}