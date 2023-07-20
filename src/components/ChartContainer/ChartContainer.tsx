import { ReactNode } from "react";
import "./ChartContainer.scss";

interface ChartContainerProps {
  title: string;
  desc: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const ChartContainer = ({
  title,
  desc,
  children,
  style,
}: ChartContainerProps) => {
  return (
    <div style={style} className="ChartContainer">
      <div className="chart-title">{title}</div>
      <div className="chart-desc">{desc}</div>
      <div className="chart">{children}</div>
    </div>
  );
};
