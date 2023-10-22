import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/hooks/useAuth";
import Cookies from "js-cookie";

export default function Authentication({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = Cookies.get("token");
  const user = Cookies.get("user");

  useEffect(() => {
    if (token || user) {
      router.push("/timeline");
    } else if ((token && !user) || (!token && user)) {
      Cookies.remove("token");
      Cookies.remove("user");
      router.push("/auth/login");
    }
  }, []);

  return <div>{children}</div>;
}
