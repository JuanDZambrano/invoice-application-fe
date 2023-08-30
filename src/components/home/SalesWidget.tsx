import PaidIcon from "@mui/icons-material/Paid";
import moment from "moment";
import { useOrderTotalValueInRange } from "../../adapters/orderItems";
import { formatDateWithTimezone } from "../../lib/date.utils";
import { Widget } from "../global/widget/Widget";

export const SalesWidget = (): JSX.Element => {
  const startDate = formatDateWithTimezone(moment().startOf("month").toDate());
  const endDate = formatDateWithTimezone(moment().endOf("month").toDate());

  const { data, isLoading, isError } = useOrderTotalValueInRange(
    startDate,
    endDate
  );

  return (
    <Widget
      title={"Ventas"}
      counter={(data && String(data.total_value)) || "---"}
      link={"Ver ventas del mes"}
      percentage={20}
      icon={
        <PaidIcon
          className="icon"
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          }}
        />
      }
    />
  );
};
