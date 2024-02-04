import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
});

export const decksAPI = {
  fetchDecks() {
    return instance
      .get<FetchDecksResponse>(`v2/decks`)
      .then((res) => res.data.items)
      .catch((err) => console.log('Ошибка fetch' + err));
  },
  addDecks(params: AddDeckParams) {
    return instance
      .post<Deck>(`v1/decks`, params)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('Ошибка post' + err));
  },
  deleteDeck<Deck>(id: string) {
    return instance
      .delete(`v1/decks/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },
};

export type AddDeckParams = {
  name: string;
};

type FetchDecksResponse = {
  items: Deck[];
  pagination: Pagination;
  maxCardsCount: number;
};
export type Author = {
  id: string;
  name: string;
};
export type Deck = {
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
};
export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};
