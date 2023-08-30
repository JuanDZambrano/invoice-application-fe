import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import moment from "moment";
import { useTotalBillValueInRangeAndStatus } from "../../adapters/bills";
import { formatDateWithTimezone } from "../../lib/date.utils";
import { Widget } from "../global/widget/Widget";

export const DebtsWidget = (): JSX.Element => {
  const startDate = formatDateWithTimezone(moment().startOf("month").toDate());
  const endDate = formatDateWithTimezone(moment().endOf("month").toDate());

  const { data, isLoading, isError } = useTotalBillValueInRangeAndStatus(
    startDate,
    endDate,
    "PE",
    "TP"
  );

  return (
    <Widget
      title={"Cuentas por pagar"}
      counter={(data && String(data.total_value)) || "0"}
      link={"Ver cuentas por pagar del mes"}
      percentage={15}
      icon={
        <RequestQuoteIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      }
    />
  );
};
