import httpClient from "../httpClient";

interface MeResponse {
  name: string;
  email: string;
}

export default async function me() {
  const { data } = await httpClient.get<MeResponse>("/users/me");
  return data;
}
