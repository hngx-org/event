import Cookies from "js-cookie";

const url = process.env.NEXT_PUBLIC_API_URL;

const signUpUrl = `${url}/user/update-profile`;
const token = Cookies.get("token");

const updateProfile = async (values: any) => {
	try {
		const response = await fetch(signUpUrl, {
			method: "PUT",
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`,
			},
			body: values,
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

export default { updateProfile };
