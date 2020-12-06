import { DirectionEnum } from "../enums";

export class TobogganMapMovement {
    private _normalizedDirection: number;
    private _calculatedMovement: number;

    constructor(public direction: DirectionEnum, public distance: number) {
        this._init();
    }

    public get calculatedMovement(): number {
        if (!this._calculatedMovement) {
            this._calculatedMovement = this._normalizedDirection * this.distance;
        }

        return this._calculatedMovement;
    }

    private _init() {
        this._normalizedDirection = (this.direction === DirectionEnum.East || this.direction === DirectionEnum.South) ? 1 : -1;
    }
}