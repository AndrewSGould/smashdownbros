import { Fighter } from "../data/roster";

export default class Utils {
  static isFighterDisabled(disabledFighters: Fighter[], fighterId: number): boolean { 
    return disabledFighters.find(fighter => fighter.id === fighterId) === null;
  }
}