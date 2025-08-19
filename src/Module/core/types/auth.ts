export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginData {
  token: string;
  user: User;
}

export interface AuthStore {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => Promise<void>;
}
