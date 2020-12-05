import * as fs from 'fs';
import { IInputReader } from "../interfaces";

export class InputReader implements IInputReader {
    constructor(protected inputFile: string) {
        // Empty.
    }

    public getInput(): string[] {
        if (!this.inputFile) {
            throw new Error('inputFile is not set');
        }

        return fs.readFileSync(this.inputFile).toString().split('\r\n');
    }
}