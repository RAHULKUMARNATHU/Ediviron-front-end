import { ReactNode } from "react";
import "./Menu.scss";
import { ChevronRight } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuProps {
  icon: ReactNode;
  label: string;
  url: string;
}

export const Menu = ({ icon, label, url }: MenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`Menu ${location.pathname === url ? "active" : ""}`}
      onClick={() => navigate(url)}
    >
      <div className="left">
        {icon} <span className="title">{label}</span>
      </div>
      <ChevronRight size={20} />
    </div>
  );
};
