import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/hooks/useAuth";
import Cookies from "js-cookie";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const {token, user} = useAuth();

  useEffect(() => {
    if (!token && !user) {
      router.push("/auth/login");
    } else if (token && !user) {
      Cookies.remove("token");
      router.push("/auth/login");
    } else if (!token && user) {
      Cookies.remove("user");
      router.push("/auth/login");
    }
  }, []);

  return children;
}
