import axios from "axios";
export default async function HandleSingUpRequest(values: any): Promise<any> {
  try {
    const response = await axios.post("http://localhost:3001/user/register", {
      email: values.email,
      password: values.password,
    });
    if (response?.status !== 201) {
      return response.status;
    }
  } catch (err) {
    throw new Error(`cannot create user ${err}`);
  }
}
