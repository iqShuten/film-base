
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FilmCardShema } from '../../../widgets/FilmCard/types/FilmCardShema';
import { fetchAllDataFirebase } from '../../../shared/api/localRequest/localRequest';

interface filmState {
  data: FilmCardShema[];
  loading: boolean;
  error: string | null;
  lastUpdated: number | null;
  fetchUsers: () => Promise<void>;
  clearCache: () => void; //?
}

const useUserStore = create<filmState>()(
  persist(
    (set, get) => ({
      data: [],
      loading: false,
      error: null,
      lastUpdated: null,
      
      fetchUsers: async () => fetchAllDataFirebase().then((data =>
        set({ loading: true, error: null });
        
      ))
        {
        // Если данные уже загружены менее 5 минут назад - не обновляем
        if (get().lastUpdated && Date.now() - get().lastUpdated < 300000) {
          return;
        }
        
        
        try {
          const response = await fetch('https://api.example.com/users');
          if (!response.ok) throw new Error('Failed to fetch users');
          const users = await response.json();
          set({ users, loading: false, lastUpdated: Date.now() });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      
      clearCache: () => {
        set({ users: [], lastUpdated: null });
      },
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
      partialize: (state) => ({ users: state.users, lastUpdated: state.lastUpdated }),
    }
  )
);

export default useUserStore;