import { create } from "zustand";
import { AUTH_STORAGE_KEY, AuthActions, AuthState, User } from "./authTypes";
import { toast } from "sonner";
import { mockAuth } from "../mocks/mockAuth";

type AuthStore = AuthState & AuthActions;

function saveAuth(state: Pick<AuthState, "user" | "token">) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
}

function loadAuth(): Pick<AuthState, "user" | "token"> | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Pick<AuthState, "user" | "token">;
  } catch {
    return null;
  }
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  token: null,
  isLoading: false,

  hydrate: () => {
    const st = loadAuth();
    if (st?.token && st?.user) set({ user: st.user, token: st.token });
  },

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const res = await mockAuth.login(email, password);
      set({ user: res.user, token: res.token });
      saveAuth({ user: res.user, token: res.token });
      toast.success("Logged in successfully");
    } catch (e: any) {
      toast.error(e?.message ?? "Login failed");
      throw e;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (payload) => {
    set({ isLoading: true });
    try {
      const res = await mockAuth.register(payload);
      set({ user: res.user, token: res.token });
      saveAuth({ user: res.user, token: res.token });
      toast.success("Account created");
    } catch (e: any) {
      toast.error(e?.message ?? "Register failed");
      throw e;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem(AUTH_STORAGE_KEY);
    toast.message("Logged out");
  }
}));
