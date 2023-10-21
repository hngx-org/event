import Cookies from "js-cookie";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

const updateProfileUrl = `${url}/user/update-profile`;
const token = Cookies.get("token");

const updateProfile = async (values: any) => {
  try {
    const response = await axios.put(
      updateProfileUrl,
      values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.status) {
      const errorResponse = await response.data;
    throw new Error(errorResponse.error); 
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default { updateProfile };