import { useCreate, useDelete, useDetail, useList, useUpdate } from "./base";
import { Order } from "./types";

export function useOrdersList() {
  return useList<Order>({
    endpoint: "orders",
    request_id: "orders",
  });
}

export function useOrderDetail(id: string) {
  return useDetail<Order>({
    endpoint: `orders/${id}`,
    request_id: `orders/${id}`,
  });
}

export function useOrderCreate() {
  return useCreate<Order>({
    endpoint: `orders`,
  });
}

export function useOrderUpdate() {
  return useUpdate<Order>({
    endpoint: `orders/`,
  });
}

export function useOrderDelete() {
  return useDelete({
    endpoint: `orders/`,
  });
}
