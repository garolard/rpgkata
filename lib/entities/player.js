"use strict";
var Player = (function () {
    function Player() {
        this.health = 1000;
        this.level = 1;
    }
    Player.prototype.isAlive = function () {
        return this.health > 0;
    };
    Player.prototype.dealDamage = function (objective, totalDamage) {
        if (objective.health - totalDamage < 0) {
            objective.health = 0;
        }
        objective.health -= totalDamage;
    };
    Player.prototype.heal = function (objective, healing) {
        if (!objective.isAlive()) {
            return;
        }
        if (objective.health + healing > 1000) {
            objective.health = 1000;
            return;
        }
        objective.health += healing;
    };
    return Player;
}());
exports.__esModule = true;
exports["default"] = Player;
