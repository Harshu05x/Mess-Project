import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface CustomerData {
  id: string;
  fname: string;
  lname: string;
  email: string;
  password: string;
  mobile: string;
  address: string;
  clerkId: string;
}

interface CustomerStore {
  userData: CustomerData;
  formData: CustomerData;
  token: string | undefined;
  loading: boolean;
  loginProcessing: boolean;
  signupProcessing: boolean;
  setFormData: (data: Partial<CustomerData>) => void;
  setUserData: (data: Partial<CustomerData>) => void;
  getCustomerData: () => void;
  setLoading: (loading: boolean) => void;
  setToken: (token: string) => void;
}

const useCustomerStore = create<CustomerStore>()(
  persist(
    (set, get) => ({
      formData: {
        id: "",
        clerkId: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
      },
      userData: {
        id: "",
        clerkId: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
      },
      isLoggedOut: false,
      setToken: (token: string) => set(() => ({ token })),
      setUserData: (data) =>
        set((state) => ({ userData: { ...state.userData, ...data } })),
      cityOptions: [],
      loginProcessing: false,
      setFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
      loginUser: async (callback: Function) => {
        const { toast } = useToast();
        set({ loginProcessing: true });
        try {
          const { formData } = get(); // Get current state
          const response = await axios.post(
            `${apiUrl}/customers/login`,
            formData
          );
          if (response && response.status === 200) {
            const userData = response?.data?.data;
            const token = response?.data?.token;
            set(() => ({ userData: { ...userData }, loginProcessing: false }));
            set(() => ({ token: token }));

            toast({
              title: "Login Successful",
              description: "You have been logged in successfully.",
            });
            callback();
            // Optionally, handle success actions
          } else {
            set({ loginProcessing: false });
            throw new Error("Failed to submit form data");
          }
        } catch (error: any) {
          const error_msg = error?.response?.data?.message;
          set({ loginProcessing: false });
          console.error("Error submitting form:", error);
          if (error_msg) {
            toast({
              variant: "destructive",
              title: "Error submitting form",
              description: error_msg,
            });
          } else {
            toast({
              variant: "destructive",
              title: "Error submitting form",
              description:
                "An error occurred while submitting the form. Please try again later.",
            });
          }

          // Optionally, handle error actions
        }
      },
      getCustomerData: async () => {
        set({ loading: true });
        try {
          const id = get().userData.id;
          const response = await axios.get(`${apiUrl}/customers/${id}`);
          if (response?.data?.data) {
            set(() => ({ userData: { ...response?.data?.data } }));
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
      name: "mess-project-customer-store",
      partialize: (state) => ({
        userData: state.userData,
      }),
    }
  )
);

export default useCustomerStore;
