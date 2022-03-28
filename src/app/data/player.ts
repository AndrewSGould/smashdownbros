import { Fighter } from "./roster";

export class Player {
  name: string = '';
}

export class ActivePlayer extends Player {
  fighterPool?: Array<Fighter> = [];
  currentFighter?: Fighter = new Fighter;
  matchHistory?: Array<Match> = [];
  record?: Record = new Record;
}

export class Match {
  opponents: Array<ActivePlayer> = [];
  fighter: Fighter = new Fighter;
  win: boolean = false;
}

export class Record {
  totalWins: number = 0;
  totalLosses: number = 0;
}