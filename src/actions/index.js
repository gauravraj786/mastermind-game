import { NEW_GAME, PLAY } from "../utils/constants";

export function play(color) {
  return { type: PLAY, color };
}

export function newGame() {
  return { type: NEW_GAME };
}
