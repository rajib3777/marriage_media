import { User } from "../auth/authTypes";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

const DEMO_EMAIL = "demo@alif.com";
const DEMO_PASSWORD = "Demo@1234";

export const mockAuth = {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    await wait(700);
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      return {
        user: { id: "u_demo", name: "Demo User", email },
        token: "mock.jwt.token"
      };
    }
    throw new Error("Invalid credentials (try demo@alif.com / Demo@1234)");
  },

  async register(payload: { name: string; email: string; password: string }) {
    await wait(900);
    if (!payload.email.includes("@")) throw new Error("Invalid email");
    return {
      user: { id: "u_" + Math.random().toString(36).slice(2), name: payload.name, email: payload.email },
      token: "mock.jwt.token"
    };
  }
};
