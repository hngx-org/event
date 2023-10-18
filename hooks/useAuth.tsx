import { User } from "@/@types";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    const user = Cookies.get("user");

    if (token) {
      setToken(token);
    }

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return { user, token };
}
