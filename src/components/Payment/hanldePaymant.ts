import axios from "axios";
import Cookies from "js-cookie";

export default async function handlePaymant(id: any, quantity: any) {
  try {
    const URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

    const cookie = Cookies;
    const token = cookie.get("token");

    let response: null | any = null;
    if (token) {
      response = await axios.post(
        `${URL}/user/addpurches`,
        {
          id: id,
          quantity: quantity,
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
    throw new Error(`cannot add cart ${err}`);
  }
}
