import config from "../utils/config";
import { NEW_GAME, PLAY } from "../utils/constants";

const generateSecret = (secretSize, availableColors) => {
  const bagOfNumbers = Object.keys(Array(availableColors).fill(null));
  const code = [];

  while (0 < secretSize--) {
    const randomIndex = Math.floor(Math.random() * bagOfNumbers.length);
    code.push(+bagOfNumbers.splice(randomIndex, 1)[0]);
  }

  return code;
};

const getNewGameState = (config) => {
  return {
    config: Object.assign({}, config),
    activeSlot: 0,
    activeRow: 0,
    rows: [],
    results: [],
    secret: generateSecret(config.secretSize, config.availableColors),
    solved: false,
    lost: false
  };
};

const getNewRow = (length) => Array(length).fill(null);

const getResult = (secret, attempt) => {
  let i;
  let nCorrect = 0;
  let nExist = 0;

  for (i in secret) {
    if (attempt[i] === secret[i]) {
      nCorrect += 1;
    } else if (attempt.indexOf(secret[i]) > -1) {
      nExist += 1;
    }
  }

  const nIncorrect = secret.length - nCorrect - nExist;

  return { nCorrect, nExist, nIncorrect };
};

const play = (state, action) => {
  const rows = [...state.rows];
  const results = [...state.results];
  let newActiveSlot = state.activeSlot + 1;
  let newActiveRow = state.activeRow;
  let solved = false;
  let lost = false;

  if (!rows[state.activeRow]) {
    rows[state.activeRow] = getNewRow(state.config.secretSize);
  }

  rows[state.activeRow][state.activeSlot] = action.color;

  if (newActiveSlot >= state.config.secretSize) {
    const result = getResult(state.secret, rows[state.activeRow]);

    results[state.activeRow] = result;
    solved = result.nCorrect === state.config.secretSize;
    lost = !solved && state.activeRow === state.config.maxRows - 1;

    newActiveSlot = 0;
    newActiveRow = Math.min(state.activeRow + 1, state.config.maxRows - 1);
  }

  return Object.assign({}, state, {
    activeSlot: !(solved || lost) && newActiveSlot,
    activeRow: newActiveRow,
    rows,
    results,
    solved,
    lost
  });
};

export default function mastermind(state = getNewGameState(config), action) {
  switch (action.type) {
    case PLAY:
      return play(state, action);

    case NEW_GAME:
      return getNewGameState(config);

    default:
      return state;
  }
}
