import { BaseDay, TobogganMap, TobogganMapMovement } from "./shared/classes";
import { DirectionEnum } from "./shared/enums";

export class Day3 extends BaseDay<number> {
    private _map: TobogganMap;

    constructor() {
        super('../input/day3.txt');
    }

    public runPart1(): number {
        return new TobogganMap(this._input).getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 3), new TobogganMapMovement(DirectionEnum.South, 1));
    }

    public runPart2(): number {
        const map: TobogganMap = new TobogganMap(this._input);

        const slopes: number[] = [
            map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 1), new TobogganMapMovement(DirectionEnum.South, 1)),
            map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 3), new TobogganMapMovement(DirectionEnum.South, 1)),
            map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 5), new TobogganMapMovement(DirectionEnum.South, 1)),
            map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 7), new TobogganMapMovement(DirectionEnum.South, 1)),
            map.getTreeCollisionCount(new TobogganMapMovement(DirectionEnum.East, 1), new TobogganMapMovement(DirectionEnum.South, 2))
        ];

        return slopes.reduce((acc, v) => acc * v, 1);
    }
}