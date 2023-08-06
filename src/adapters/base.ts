import {
  useQuery,
  useMutation,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { apiClient } from "./APIClient";

export interface APIParameters {
  endpoint: string;
}
export interface QueryAPIParameters extends APIParameters {
  request_id: string;
  id?: string;
}

export function useList<ResponseType>({
  endpoint,
  request_id,
}: QueryAPIParameters): UseQueryResult<ResponseType[], AxiosError> {
  return useQuery([`${request_id}`], async () => {
    const { data } = await apiClient.get<ResponseType[]>(`api/${endpoint}`);
    return data;
  });
}

export function useDetail<ResponseType>({
  endpoint,
  request_id,
  id,
}: QueryAPIParameters): UseQueryResult<ResponseType, AxiosError> {
  return useQuery([`${request_id}`], async () => {
    const { data } = await apiClient.get<ResponseType>(
      `api/${endpoint}/${id || ""}`
    );
    return data;
  });
}

export function useCreate<ResponseType>({
  endpoint,
}: APIParameters): UseMutationResult<ResponseType, AxiosError, ResponseType> {
  return useMutation(async (newObject: ResponseType) => {
    const { data } = await apiClient.post<ResponseType>(
      `api/${endpoint}`,
      newObject
    );
    return data;
  });
}

export function useUpdate<ResponseType>({
  endpoint,
}: APIParameters): UseMutationResult<
  ResponseType,
  AxiosError,
  { id: string; updatedProduct: ResponseType }
> {
  return useMutation(
    async ({
      id,
      updatedProduct,
    }: {
      id: string;
      updatedProduct: ResponseType;
    }) => {
      const { data } = await apiClient.put<ResponseType>(
        `api/${endpoint}/${id}/`,
        updatedProduct
      );
      return data;
    }
  );
}

export function useDelete({
  endpoint,
}: APIParameters): UseMutationResult<void, AxiosError, string> {
  return useMutation(async (id: string) => {
    await apiClient.delete(`api/${endpoint}/${id}/`);
  });
}
