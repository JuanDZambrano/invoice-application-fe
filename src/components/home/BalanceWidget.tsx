import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Widget } from "../global/widget/Widget";

export const BalanceWidget = (): JSX.Element => {
  return (
    <Widget
      title={"Balance"}
      counter={"900"}
      link={"Ver balance del mes"}
      percentage={5}
      icon={
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      }
    />
  );
};
