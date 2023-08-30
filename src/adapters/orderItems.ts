import { useDetail } from "./base";
import { OrderItemTotalValue } from "./types";

export function useOrderTotalValueInRange(start: string, end: string) {
  return useDetail<OrderItemTotalValue>({
    endpoint: `v1/orderitem/total-order-value-in-date-range/`,
    request_id: `orders/total_value/${start}/${end}`,
    params: {
      date__gte: start,
      date__lte: end,
    },
  });
}
