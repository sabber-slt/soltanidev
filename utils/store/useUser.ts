import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  user: any;
  setUser: (user: any) => void;
}

const useUSer = create<User>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set(() => ({ user })),
      }),
      {
        name: 'avocado',
      }
    )
  )
);

export default useUSer;
