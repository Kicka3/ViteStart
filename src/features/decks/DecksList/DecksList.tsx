import s from './DecksList.module.css';
import { DeckItem } from '../DecksList/DeckItem/DeckItem.tsx';
import { useFetchDecks } from '../../../../src/features/decks/DecksList/DeckItem/useFetchDecks.ts';

export const DecksList = () => {
  const { decks } = useFetchDecks();
  return (
    <ul className={s.list}>
      {decks.map((el) => (
        <DeckItem key={el.id} deck={el} />
      ))}
    </ul>
  );
};
