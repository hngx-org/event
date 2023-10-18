import Cookies from "js-cookie";
import {toast} from "react-toastify";

export function LogOut() {
  Cookies.remove("token");
  Cookies.remove("yser");
  toast.success("Logout successful");
  window.location.assign("/auth/login");
}
