import { useDetail } from "./base";
import { GenericTotalValue } from "./types";

export function useTotalBillValueInRangeAndStatus(
  start: string,
  end: string,
  status: string,
  type: string
) {
  return useDetail<GenericTotalValue>({
    endpoint: "v1/bill/total-bill-value-in-date-range-and-status/",
    request_id: `bills/total_value/${start}/${end}/${status}/${type}`,
    params: {
      date__gte: start,
      date__lte: end,
      status,
      type,
    },
  });
}
