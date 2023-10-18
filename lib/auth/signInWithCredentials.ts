import {LoginData, SignupData} from "@/@types";

const url = process.env.NEXT_PUBLIC_API_URL;

const signUpUrl = `${url}/auth/login`;

const signin = async (values: LoginData) => {
  try {
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
  signin,
};
