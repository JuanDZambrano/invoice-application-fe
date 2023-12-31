import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactsIcon from "@mui/icons-material/Contacts";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "../../../styles/components/global/sidebar/sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo_container">CuentasClaras</span>
      </div>
      <hr />
      <div className="pages_list">
        <ul>
          <p className="title">PRINCIPAL</p>
          <li>
            <SpaceDashboardIcon className="icon" />
            <span>Inicio</span>
          </li>
          <li>
            <StorefrontIcon className="icon" />
            <span>Productos</span>
          </li>
          <li>
            <ReceiptIcon className="icon" />
            <span>Ventas</span>
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
            <span>Deudas</span>
          </li>
          <li>
            <BadgeIcon className="icon" />
            <span>Empleados</span>
          </li>
          <li>
            <ContactsIcon className="icon" />
            <span>Contactos</span>
          </li>
          <p className="title">USUARIO</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Cerrar Sesión</span>
          </li>
        </ul>
      </div>
      <div className="footer">
        <LightModeIcon className="icon" />
        <DarkModeOutlinedIcon className="icon" />
      </div>
    </div>
  );
};
