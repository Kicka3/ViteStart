import { useAppDispatch } from '../../../../../src/app/store.ts';
import { useSelector } from 'react-redux';
import { selectDecks } from '../../../../../src/features/decks/decks-selectors.ts';
import { useEffect } from 'react';
import { fetchDecksTC } from '../../../../../src/features/decks/decks-thunks.ts';

export const useFetchDecks = () => {
  const dispatch = useAppDispatch();
  const decks = useSelector(selectDecks);

  useEffect(() => {
    dispatch(fetchDecksTC());
  }, []);

  return {
    decks,
  };
};
