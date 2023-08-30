import { useCreate, useDelete, useDetail, useList, useUpdate } from "./base";
import { Order } from "./types";

export function useOrdersList() {
  return useList<Order>({
    endpoint: "v1/orders",
    request_id: "orders",
  });
}

export function useOrderDetail(id: string) {
  return useDetail<Order>({
    endpoint: `v1/orders/${id}`,
    request_id: `orders/${id}`,
  });
}

export function useOrderCreate() {
  return useCreate<Order>({
    endpoint: `v1/orders/`,
  });
}

export function useOrderUpdate() {
  return useUpdate<Order>({
    endpoint: `v1/orders/`,
  });
}

export function useOrderDelete() {
  return useDelete({
    endpoint: `v1/orders/`,
  });
}
