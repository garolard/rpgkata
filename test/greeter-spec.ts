/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import { expect } from "chai";
import { IPlayer, Player } from "../src";

function attack(p1: IPlayer, p2: IPlayer, damage: number) {
  p1.dealDamage(p2, damage);
}

function heal(p1: IPlayer, p2: IPlayer, heal: number) {
  p1.heal(p2, heal);
}

function fullyHealPlayer(p: IPlayer) {
  p.health = 1000;
}

function levelUp(p: IPlayer, level: number) {
  p.level = level;
}

describe("Basic functionallity", () => {

  let player1: IPlayer;
  let player2: IPlayer;

  before(() => {
    player1 = new Player();
    player2 = new Player();
  });

  it("player1 make 0 damage to player2", () => {
    attack(player1, player2, 0);
    expect(player2.health).to.equal(1000);
  });

  it("should damage 100 points to player2", () => {
    attack(player1, player2, 100);
    expect(player2.health).to.equal(900);
  });

  it("should heal 50 points to player2", () => {
    heal(player2, player2, 50);
    expect(player2.health).to.equal(950);
  });

  it("should heal max. 50 points to player2", () => {
    heal(player2, player2, 100);
    expect(player2.health).to.equal(1000);
  });

  it("shoudl kill player2 and not healling him", () => {
    attack(player1, player2, 1000);
    heal(player2, player2, 100);
    expect(player2.isAlive()).to.equal(false);
  });

});


describe("Advanced functionallity", () => {

  let player1: IPlayer;
  let player2: IPlayer;

  before(() => {
    player1 = new Player();
    player2 = new Player();
  });

  it("shoud not damage player1 himself", () => {
    attack(player1, player1, 100);
    expect(player1.health).to.equal(1000);
  });

  it("should not heal enemies", () => {
    attack(player1, player2, 100);
    heal(player1, player2, 100);

    expect(player2.health).to.equal(900);
  });

  it("should reduce damage in 50% due to high level", () => {
    fullyHealPlayer(player2)
    levelUp(player2, 6);
    attack(player1, player2, 100);
    expect(player2.health).to.equal(950);
  });

  it("should increase damage in 50% due to hight level", () => {
    attack(player2, player1, 100);
    expect(player1.health).to.equal(850);
  });
});
