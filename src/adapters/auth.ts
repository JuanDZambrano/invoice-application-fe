import { AxiosResponse } from "axios";
import { apiClient } from "./APIClient";
import { CustomUser } from "./types";
import { useQuery, useMutation } from "@tanstack/react-query";

export const fetchUserData = async (): Promise<CustomUser> => {
  const { data } = await apiClient.get<CustomUser>(`api/v1/auth/me/`);
  return data;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<boolean | AxiosResponse<CustomUser>> => {
  return await apiClient
    .post("api/v1/auth/login/", {
      email,
      password,
    })
    .catch(() => {
      return false;
    });
};

export const useUserInfo = () => {
  return useQuery({ queryKey: ["userData"], queryFn: () => fetchUserData() });
};

export const useLoginUser = (
  email: string,
  password: string,
  onSuccess: () => void,
  onError: () => void
) => {
  return useMutation({
    mutationFn: async () => {
      const response = await loginUser(email, password);
      if (response === false) {
        onError();
      } else {
        onSuccess();
      }
    },
  });
};

export async function registerUser(formData: CustomUser): Promise<CustomUser> {
  const { data } = await apiClient.post<CustomUser>(
    "api/v1/auth/registration/",
    formData
  );
  return data;
}

export async function logoutUser(): Promise<void> {
  await apiClient.post("api/v1/auth/logout/");
}
