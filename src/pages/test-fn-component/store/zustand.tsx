import { create } from 'zustand'
import { request } from 'ice';

export interface COUNT {
  count: number;
  initCount: () => void;
  setCount: () => void;
}

export const useCount = create((set: (state: any) => void): COUNT => ({
  count: 0,
  initCount: async () => {
    const res = await request('https://mocks.sto.cn/mock/test-mocks/base/getNum');
    set((state: COUNT) => ({count: res.data}));
  },
  setCount: () => set((state: COUNT) => ({count: state.count + 1}))
}));