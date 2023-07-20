import { Sidebar } from "../../components/global";
import {
  BalanceWidget,
  BestSellingChart,
  DebtsWidget,
  ExpensesWidget,
  IncomeWidget,
  SalesChart,
  SalesTable,
} from "../../components/home";
import "../../styles/pages/home/home.scss";

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
        <div className="charts">
          <BestSellingChart />
          <SalesChart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="salesListContainer">
          <div className="salesListTitle">Latest Transactions</div>
          <SalesTable />
        </div>
      </div>
    </div>
  );
};
