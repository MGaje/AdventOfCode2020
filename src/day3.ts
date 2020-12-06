import { BaseDay, TobogganMap, TobogganMapMovement } from "./shared/classes";
import { DirectionEnum } from "./shared/enums";

export class Day3 extends BaseDay<number> {
    private _map: TobogganMap;

    constructor() {
        super('../input/day3.txt');
        this._map = new TobogganMap(this._input);
    }

    public runPart1(): number {
        return this._map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 3), new TobogganMapMovement(DirectionEnum.South, 1));
    }

    public runPart2(): number {
        const slopes: number[] = [
            this._map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 1), new TobogganMapMovement(DirectionEnum.South, 1)),
            this._map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 3), new TobogganMapMovement(DirectionEnum.South, 1)),
            this._map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 5), new TobogganMapMovement(DirectionEnum.South, 1)),
            this._map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 7), new TobogganMapMovement(DirectionEnum.South, 1)),
            this._map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 1), new TobogganMapMovement(DirectionEnum.South, 2))
        ];

        return slopes.reduce((acc, v) => acc * v, 1);
    }
}