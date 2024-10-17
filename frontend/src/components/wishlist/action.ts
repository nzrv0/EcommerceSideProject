import axios from "axios";
import Cookies from "js-cookie";

export default async function handleAddWish(id: any) {
  try {
    const cookie = Cookies;
    const token = cookie.get("token");
    const response = await axios.post(
      "http://localhost:3001/user/addwish",
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
    return response.data;
  } catch (err) {
    throw new Error(`cannot add wish ${err}`);
  }
}
