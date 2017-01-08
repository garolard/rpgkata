import { IPlayer } from "../player";
declare class Player implements IPlayer {
    health: number;
    level: number;
    constructor();
    isAlive(): boolean;
    dealDamage(objective: IPlayer, damage: number): void;
    heal(objective: IPlayer, healing: number): void;
    private canReceiveMoreDamage(objective, damage);
    private canReceiveMoreHealing(objective, healing);
    private calculateRealDamage(objective, damage);
}
export default Player;
