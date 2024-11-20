import axios from "axios";
export default async function HandleSingUpRequest(values: any): Promise<any> {
  console.log(values);
  try {
    const URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

    const response = await axios.post(`${URL}/user/register`, {
      firstName: values.firstName,
      lastName: values.lastName,
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
