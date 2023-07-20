import { ReactNode } from "react";
import "./Chips.scss";

export interface ChipsProps {
  label: string;
  value: ReactNode;
}

export const Chips = ({ label, value }: ChipsProps) => {
  return (
    <div className="Chips">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
};
