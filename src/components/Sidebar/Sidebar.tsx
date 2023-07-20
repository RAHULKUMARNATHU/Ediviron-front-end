import { ReactComponent as Logo } from "../../assets/sidebar/logo.svg";
import { ReactComponent as Dashboard } from "../../assets/sidebar/dashboard.svg";
import { ReactComponent as FeeManagement } from "../../assets/sidebar/feeManagement.svg";
import { ReactComponent as Students } from "../../assets/sidebar/students.svg";
import { ReactComponent as Disbursal } from "../../assets/sidebar/disbursal.svg";
import { ReactComponent as Promote } from "../../assets/sidebar/promote.svg";
import { ReactComponent as Help } from "../../assets/sidebar/help.svg";
import { Menu } from "./Menu/Menu";
import "./Sidebar.scss";

export const Sidebar = () => {
  const menu = [
    { label: "Dashboard", icon: <Dashboard />, url: "/dashboard" },
    { label: "Fee Management", icon: <FeeManagement />, url: "/feeManagement" },
    { label: "Students", icon: <Students />, url: "/students" },
    { label: "Disbursal", icon: <Disbursal />, url: "/disbursal" },
    { label: "Promote", icon: <Promote />, url: "/promote" },
    { label: "Help", icon: <Help />, url: "/help" },
  ];
  return (
    <div className="Sidebar">
      <div className="header">
        <Logo /> <span className="title">Edviron</span>
        <span className="version">v.01</span>
      </div>

      <div className="menuContainer">
        {menu.map(({ label, icon, url }) => (
          <Menu key={label} label={label} icon={icon} url={url} />
        ))}
      </div>
    </div>
  );
};
