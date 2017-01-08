import { IPlayer } from "../player";
declare class Player implements IPlayer {
    health: number;
    level: number;
    constructor();
    isAlive(): boolean;
    dealDamage(objective: IPlayer, totalDamage: number): void;
    heal(objective: IPlayer, healing: number): void;
}
export default Player;
