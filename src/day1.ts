
import * as combinations from 'combinations';
import { InputReader } from './shared/classes/input-reader.class';
import { IRunnable } from './shared/interfaces';

export class Day1 implements IRunnable<number | null> {
    private _inputReader: InputReader;
    private _input: string[];

    constructor() {
        this._inputReader = new InputReader('../input/day1.txt');
        this._input = this._inputReader.getInput();
    }

    public getCombinations(size: number): string[] {
        return combinations(this._input, size, size).map((x: string[]) => x.join(','));
    }

    public findTargetResult(comboSize: number): number | null {
        let parsedResult: number | null = null;

        this.getCombinations(comboSize).forEach(src => {
            const parsed: number[] = src.split(',').map(x => +x);
            const sum: number = parsed.reduce((acc, v) => acc + v, 0);

            if (sum === 2020) {
                parsedResult = parsed.reduce((acc, v) => acc * v, 1);
                return;
            }
        });

        return parsedResult;
    }

    public runPart1(): number | null {
        return this.findTargetResult(2);
    }

    public runPart2(): number | null {
        return this.findTargetResult(3);
    }
}