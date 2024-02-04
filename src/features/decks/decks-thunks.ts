import { addDecksAС, removeDecksAС, setDecksAС } from '../../../src/features/decks/decks-reducer.ts';
import { AddDeckParams, decksAPI } from '../../../src/features/decks/decks-api.ts';
import { Dispatch } from 'redux';

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAС(res));
  });
};

export const addDecksTC = (params: AddDeckParams) => (dispatch: Dispatch) => {
  decksAPI.addDecks(params).then((res) => {
    dispatch(addDecksAС(res));
  });
};

export const deleteDecksTC = (id: string) => (dispatch: Dispatch) => {
  decksAPI.deleteDeck(id).then((res) => {
    dispatch(removeDecksAС(res));
  });
};
