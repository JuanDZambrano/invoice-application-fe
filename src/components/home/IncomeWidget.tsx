import PaidIcon from "@mui/icons-material/Paid";
import { Widget } from "../global/widget/Widget";

export const IncomeWidget = (): JSX.Element => {
  return (
    <Widget
      title={"Ingresos"}
      counter={"1234"}
      link={"Ver ingresos del mes"}
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
