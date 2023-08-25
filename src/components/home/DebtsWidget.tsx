import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Widget } from "../global/widget/Widget";

export const DebtsWidget = (): JSX.Element => {
  return (
    <Widget
      title={"Cuentas por pagar"}
      counter={"200"}
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
