import { API_BASE_URL } from "@/constants";
import { Service } from "@/types";

interface GetServicesResponse {
  success: boolean;
  message: string;
  data?: Service[];
}

export async function getServices(): Promise<GetServicesResponse> {
  const res = await fetch(`${API_BASE_URL}/services`);

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
}
