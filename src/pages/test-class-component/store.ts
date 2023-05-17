// src/store.ts
import { createStore } from 'ice';
import num from './models/num';

const store = createStore(
  {
    num,
  },
);

export default store;