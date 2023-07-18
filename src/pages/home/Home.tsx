import { Sidebar } from "../../components";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_content">Container</div>
    </div>
  );
};
