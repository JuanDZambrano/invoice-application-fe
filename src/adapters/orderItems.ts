import { useDetail } from "./base";
import { GenericTotalValue } from "./types";

export function useOrderTotalValueInRange(start: string, end: string) {
  return useDetail<GenericTotalValue>({
    endpoint: `v1/orderitem/total-order-value-in-date-range/`,
    request_id: `orders/total_value/${start}/${end}`,
    params: {
      date__gte: start,
      date__lte: end,
    },
  });
}
