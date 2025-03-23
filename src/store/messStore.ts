import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface MessData {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  messType: string;
  messImage: string;
  foodItems: FoodItem[];
}

interface MessStore {
  messes: MessData[];
  messData: MessData;
  loading: boolean;
  getMesses: () => void;
  getMessById: (id: any) => void;
  setLoading: (loading: boolean) => void;
}

const useMessStore = create<MessStore>()(
  persist(
    (set, get) => ({
      messes: [],
      messData: {
        id: "",
        name: "",
        address: "",
        phoneNumber: "",
        messType: "",
        messImage: "",
        foodItems: [],
      },
      getMesses: async () => {
        set({ loading: true });
        try {
          const response = await axios.get(`${apiUrl}/mess`);
          if (response?.data?.data) {
            set(() => ({ messes: [...response?.data?.data] }));
          }
        } catch (error) {
          console.error("Error fetching customer data:", error);
        }
        set({ loading: false });
      },
      getMessById: async (id) => {
        set({ loading: true });
        try {
          const response = await axios.get(`${apiUrl}/mess/${id}`);
          if (response?.data?.data) {
            set(() => ({ messData: { ...response?.data?.data } }));
          }
        } catch (error) {
          console.error("Error fetching customer data:", error);
        }
        set({ loading: false });
      },
      setLoading: (loading: boolean) => set({ loading }),
      token: undefined,
      signupProcessing: false,
      loading: false,
    }),
    {
      name: "mess-project-mess-store",
      partialize: (state) => ({
        userData: state.messData,
      }),
    }
  )
);

export default useMessStore;
