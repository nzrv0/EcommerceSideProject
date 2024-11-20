import axios from "axios";
import Cookies from "js-cookie";

export default async function handleAddWish(id: any) {
  try {
    const URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

    const cookie = Cookies;
    const token = cookie.get("token");

    let response: null | any = null;
    if (token) {
      response = await axios.post(
        `${URL}/user/addwish`,
        {
          wish: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        },
      );
    }

    return response.data;
  } catch (err) {
    throw new Error(`cannot add wish ${err}`);
  }
}
