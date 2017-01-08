import { IPlayer } from "../player";

class Player implements IPlayer {
    public health: number;
    public level: number;

    constructor() {
        this.health = 1000;
        this.level = 1;
    }

    public isAlive() {
        return this.health > 0;
    }

    public dealDamage(objective: IPlayer, totalDamage: number) {
        if (objective.health - totalDamage < 0) {
            objective.health = 0;
        }

        objective.health -= totalDamage;
    }

    public heal(objective: IPlayer, healing: number) {
        if (!objective.isAlive()) {
            return;
        }

        if (objective.health + healing > 1000) {
            objective.health = 1000;
            return;
        }

        objective.health += healing;
    }
}

export default Player;
