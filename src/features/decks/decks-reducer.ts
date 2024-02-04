import { AddDeckParams, Deck } from '../decks/decks-api.ts';

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
};

type DecksState = typeof initialState;

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS': {
      return { ...state, decks: action.payload.decks };
    }
    case 'DECKS/ADD-DECKS': {
      return { ...state, decks: [action.payload.decks, ...state.decks] };
    }
    case 'DECKS/REMOVE-DECKS': {
      return { ...state, decks: state.decks.filter((el) => el.id !== action.payload.id) };
    }
    default:
      return state;
  }
};

type DecksActions = SetDecksAС | AddDecksAС | RemoveDecksAС;

//set
type SetDecksAС = ReturnType<typeof setDecksAС>;
export const setDecksAС = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET-DECKS',
    payload: {
      decks,
    },
  } as const;
};

//update
type AddDecksAС = ReturnType<typeof addDecksAС>;
export const addDecksAС = (decks: Deck) => {
  return {
    type: 'DECKS/ADD-DECKS',
    payload: {
      decks,
    },
  } as const;
};

//removeDeck
type RemoveDecksAС = ReturnType<typeof removeDecksAС>;
export const removeDecksAС = (id: string) => {
  return {
    type: 'DECKS/REMOVE-DECKS',
    payload: {
      id,
    },
  } as const;
};
