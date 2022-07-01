import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  calorie: number | null;
  setCal: (calorie: number) => void;
}

const useCalorie = create<User>()((set) => ({
  calorie: null,
  setCal: (calorie: number) => set(() => ({ calorie })),
}));

export default useCalorie;
