import { apiClient } from "./APIClient";
import { CustomUser } from "./types";
import { useQuery, useMutation } from "@tanstack/react-query";

export const fetchUserData = async (): Promise<CustomUser> => {
  const { data } = await apiClient.get<CustomUser>(`api/v1/auth/users/me/`);
  return data;
};

export const useUserInfo = () => {
  return useQuery(["userData"], () => fetchUserData());
};

export const useLoginUser = (username: string, password: string) => {
  const userInfoQuery = useUserInfo();

  return useMutation(async () => {
    await apiClient.post("api/v1/auth/login/", { username, password });

    // Refresh the user info after login
    await userInfoQuery.refetch();

    return userInfoQuery;
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
