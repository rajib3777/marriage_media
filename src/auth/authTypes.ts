export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
};

export type AuthActions = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (payload: { name: string; email: string; password: string }) => Promise<void>;
  hydrate: () => void;
};

export const AUTH_STORAGE_KEY = "alif_auth_v1";
