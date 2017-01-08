/// <reference path="../node_modules/@types/mocha/index.d.ts" />


import { IPlayer, Player } from "../src";
import * as chai from "chai";

const expect = chai.expect;

describe("Basic functionallity", () => {

  let player1: IPlayer;
  let player2: IPlayer;

  before(() => {
    player1 = new Player();
    player2 = new Player();
  });

  it("player1 make 0 damage to player2", () => {
    player1.dealDamage(player2, 0);
    expect(player2.health).to.equal(1000);
  });

  it("should damage 100 points to player2", () => {
    player1.dealDamage(player2, 100);
    expect(player2.health).to.equal(900);
  });

  it("should heal 50 points to player2", () => {
    player2.heal(player2, 50);
    expect(player2.health).to.equal(950);
  });

  it("should heal max. 50 points to player2", () => {
    player2.heal(player2, 100);
    expect(player2.health).to.equal(1000);
  });

  it("shoudl kill player2 and not healling him", () => {
    player1.dealDamage(player2, 1000);
    player2.heal(player2, 100);
    expect(player2.isAlive()).to.equal(false);
  });

});
