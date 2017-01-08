export interface IPlayer {
  health: number;
  level: number;

  isAlive: () => boolean;
  dealDamage: (objective: IPlayer, totalDamage: number) => void;
  heal: (objective: IPlayer, healing: number) => void;
}
