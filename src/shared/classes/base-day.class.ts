import { InputReader } from ".";
import { IRunnable } from "../interfaces";

export abstract class BaseDay<T> implements IRunnable<T> {
    protected _inputReader: InputReader;
    protected _input: string[];

    constructor(inputFile: string) {
        this._inputReader = new InputReader(inputFile);
        this._input = this._inputReader.getInput();
    }

    public abstract runPart1(): T;
    public abstract runPart2(): T;
}