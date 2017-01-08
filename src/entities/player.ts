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

    public dealDamage(objective: IPlayer, damage: number) {
        if (this === objective) {
            return;
        }

        const realDamage = this.calculateRealDamage(objective, damage);

        if (this.canReceiveMoreDamage(objective, realDamage)) {
            objective.health = 0;
            return;
        }

        objective.health -= realDamage;
    }

    public heal(objective: IPlayer, healing: number) {
        if (!objective.isAlive() || this !== objective) {
            return;
        }

        if (this.canReceiveMoreHealing(objective, healing)) {
            objective.health = 1000;
            return;
        }

        objective.health += healing;
    }

    private canReceiveMoreDamage(objective: IPlayer, damage: number): boolean {
        return objective.health - damage < 0;
    }

    private canReceiveMoreHealing(objective: IPlayer, healing: number): boolean {
        return objective.health + healing > 1000;
    }

    private calculateRealDamage(objective: IPlayer, damage: number): number {
        if (objective.level - this.level >= 5) {
            return damage *= .5;
        } else if (this.level - objective.level >= 5) {
            return damage *= 1.5;
        } else {
            return damage;
        }
    }
}

export default Player;
