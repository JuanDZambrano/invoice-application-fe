import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Contacts,
  Debts,
  Employees,
  Home,
  Login,
  Products,
  Sales,
  SignUp,
} from "./pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="debts" element={<Debts />} />
          <Route path="employees" element={<Employees />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
