import { Sidebar } from "../../components/global";
import {
  BalanceWidget,
  DebtsWidget,
  ExpensesWidget,
  IncomeWidget,
} from "../../components/home";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_content">
        <div className="widgets">
          <IncomeWidget />
          <ExpensesWidget />
          <DebtsWidget />
          <BalanceWidget />
        </div>
      </div>
    </div>
  );
};
