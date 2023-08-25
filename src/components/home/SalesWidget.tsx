import PaidIcon from "@mui/icons-material/Paid";
import { Widget } from "../global/widget/Widget";

export const SalesWidget = (): JSX.Element => {
  return (
    <Widget
      title={"Ventas"}
      counter={"1234"}
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
