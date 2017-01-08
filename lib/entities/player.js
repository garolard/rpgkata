"use strict";
var Player = (function () {
    function Player() {
        this.health = 1000;
        this.level = 1;
    }
    Player.prototype.isAlive = function () {
        return this.health > 0;
    };
    Player.prototype.dealDamage = function (objective, damage) {
        if (this === objective) {
            return;
        }
        var realDamage = this.calculateRealDamage(objective, damage);
        if (this.canReceiveMoreDamage(objective, realDamage)) {
            objective.health = 0;
            return;
        }
        objective.health -= realDamage;
    };
    Player.prototype.heal = function (objective, healing) {
        if (!objective.isAlive() || this !== objective) {
            return;
        }
        if (this.canReceiveMoreHealing(objective, healing)) {
            objective.health = 1000;
            return;
        }
        objective.health += healing;
    };
    Player.prototype.canReceiveMoreDamage = function (objective, damage) {
        return objective.health - damage < 0;
    };
    Player.prototype.canReceiveMoreHealing = function (objective, healing) {
        return objective.health + healing > 1000;
    };
    Player.prototype.calculateRealDamage = function (objective, damage) {
        if (objective.level - this.level >= 5) {
            return damage *= .5;
        }
        else if (this.level - objective.level >= 5) {
            return damage *= 1.5;
        }
        else {
            return damage;
        }
    };
    return Player;
}());
exports.__esModule = true;
exports["default"] = Player;
