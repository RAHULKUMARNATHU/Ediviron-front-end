import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import "./Root.scss";

export const Root = () => {
  return (
    <div className="Root">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};
