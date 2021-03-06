import { Fighter } from "../data/roster";

export class GameConfig {
  startingRoster: Array<Fighter> = [];
  availableRoster: Array<Fighter> = [];
  disabledFighters: Array<Fighter> = [];
  spicyMode: boolean = false;
  mercyRule: boolean = false;
  participatingPlayers: number = 0;
  stockCount: number = 0;
  maxRosterSize: number = 0;
}
