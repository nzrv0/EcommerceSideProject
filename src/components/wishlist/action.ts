import axios from "axios";
import Cookies from "js-cookie";
const cookie = Cookies;
const token = cookie.get("token");
const URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export default async function handleAddWish(id: any) {
  try {
    console.log(token);
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
