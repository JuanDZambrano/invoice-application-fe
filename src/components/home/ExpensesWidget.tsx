import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import { Widget } from "../global/widget/Widget";

export const ExpensesWidget = (): JSX.Element => {
  return (
    <Widget
      title={"Egresos"}
      counter={"134"}
      link={"Ver egresos del mes"}
      percentage={0}
      icon={
        <MoneyOffCsredOutlinedIcon
          className="icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, 0.2)",
          }}
        />
      }
    />
  );
};
