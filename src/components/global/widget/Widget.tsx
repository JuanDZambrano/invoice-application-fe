import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../../../styles/components/global/widget/widget.scss";

export interface Widget {
  title: string;
  counter: string;
  link: string;
  percentage: number;
  icon: JSX.Element;
  isMoney?: boolean;
}

export const Widget = ({
  title,
  counter,
  link,
  percentage,
  icon,
  isMoney = true,
}: Widget): JSX.Element => {
  return (
    <div className="widget">
      <div className="information">
        <span className="title">{title}</span>
        <span className="counter">
          {isMoney && "$"} {counter}
        </span>
        <span className="link">{link}</span>
      </div>
      <div className="trend">
        <div
          className={
            percentage > 0 ? "percentage positive" : "percentage negative"
          }
        >
          {percentage > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          {percentage} %
        </div>
        {icon}
      </div>
    </div>
  );
};
