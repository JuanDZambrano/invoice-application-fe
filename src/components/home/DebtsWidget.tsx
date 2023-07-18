import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Widget } from "../global/widget/Widget";

export const DebtsWidget = (): JSX.Element => {
  return (
    <Widget
      title={"Deudas"}
      counter={"200"}
      link={"Ver deudas del mes"}
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
