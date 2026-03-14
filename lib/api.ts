import { API_BASE_URL } from "@/constants";
import { Service } from "@/types";

interface GetServicesResponse {
  success: boolean;
  message: string;
  data?: Service[];
}

export async function getServices(): Promise<GetServicesResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/services`);

    if (!res.ok) {
      console.log("Failed to fetch services");
      return {
        success: false,
        message: "Failed to fetch services",
      };
    }

    return res.json();
  } catch (error) {
    console.log("Failed to fetch services", error);
    return {
      success: false,
      message: "Failed to fetch services",
    };
  }
}
