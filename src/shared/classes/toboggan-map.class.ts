import { DirectionEnum } from "../enums";
import { Position } from "./position.class";
import { TobogganMapMovement } from "./toboggan-map-movement.class";

export class TobogganMap {
    private _input: string[];
    static readonly OPEN: string = '.';
    static readonly TREE: string = '#';

    constructor(input: string[]) {
        this._input = input;
    }

    public getTreeCollisionCount(movementX: TobogganMapMovement, movementY: TobogganMapMovement): number {
        let treeColCount: number = 0;
        let currentPos: Position = new Position(0, 0);

        while (true) {
            currentPos = this._move(currentPos, movementX, movementY);

            if (!this._input[currentPos.y]) {
                break;
            }

            if (this._input[currentPos.y][currentPos.x] === TobogganMap.TREE) {
                treeColCount += 1;
            }
        }

        return treeColCount;
    }

    private _move(p: Position, movementX: TobogganMapMovement, movementY: TobogganMapMovement): Position {
        return new Position((p.x + movementX.calculatedMovement) % this._input[0].length, p.y + movementY.calculatedMovement);
    }

}