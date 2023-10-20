import {ForgotPasswordData} from "@/@types";
import Cookies from "js-cookie";

const url = process.env.NEXT_PUBLIC_API_URL;

const signUpUrl = `${url}/user/change-password`;
const token = Cookies.get("token");

const forgotPassword = async (values: ForgotPasswordData) => {
  try {
    const response = await fetch(signUpUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    return response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default {
  forgotPassword,
};
