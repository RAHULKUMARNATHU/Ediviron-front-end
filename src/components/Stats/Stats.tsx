import { ReactNode } from "react";
import "./Stats.scss";
import { ArrowDown, ArrowUp } from "react-feather";

export interface StatsProps {
  title: string;
  amount: ReactNode;
  increment?: boolean;
  percentage?: string;
  icon: ReactNode;
  color?: "green" | "red" | "blue";
}

export const Stats = ({
  title,
  amount,
  icon,
  increment,
  percentage,
  color = "green",
}: StatsProps) => {
  return (
    <div className="Stats">
      <div className={`statsLeft ${color}`}>{icon}</div>
      <div className="statsRight">
        <div className="statsTitle">{title}</div>
        <div className="statsAmount">{amount}</div>
        {Boolean(percentage) && (
          <div className="statsIncrementDecrement">
            <div className="percentage">
              {increment ? <ArrowUp size={20} /> : <ArrowDown size={20} />}{" "}
              {percentage}
            </div>
            in last 30 days
          </div>
        )}
      </div>
    </div>
  );
};
