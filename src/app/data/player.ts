import { Fighter } from "./roster";

export class Player {
  name: string = '';
}

export class ActivePlayer extends Player {
  currentFighter?: Fighter = new Fighter;
  matchHistory?: Array<Match> = [];
}

export class Match {
  opponents: Array<ActivePlayer> = [];
  fighter: Fighter = new Fighter;
  win: boolean = false;
}