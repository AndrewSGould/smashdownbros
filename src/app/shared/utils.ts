import { Fighter } from "../data/roster";

export default class Utils {
  static isFighterDisabled(disabledFighters: Array<Fighter>, fighterId: number): boolean { 
    return disabledFighters.find(fighter => fighter.id === fighterId) !== undefined;
  }
}
