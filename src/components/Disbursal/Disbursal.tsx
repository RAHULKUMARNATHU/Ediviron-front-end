import "./Disbursal.scss";

const disbursal = [
  { date: "July 11 2023 ", amount: "503123", status: "Pending" },
  { date: "July 10 2023 ", amount: "503123", status: "Successful" },
  { date: "July 9 2023 ", amount: "503123", status: "Successful" },
  { date: "July 8 2023 ", amount: "503123", status: "Successful" },
];

export const Disbursal = () => {
  return (
    <div className="disbursalContainer">
      <div className="disbursalTitle">Disbursal</div>
      <div className="disbursalLabels">
        <div className="disbursalLabel">Date</div>
        <div className="disbursalLabel">Amount</div>
        <div className="disbursalLabel">Status</div>
      </div>
      {disbursal.map((data, index) => (
        <div className="disbursalData" key={index}>
          <label>{data.date}</label>
          <label>{data.amount}</label>
          <label>{data.status}</label>
        </div>
      ))}
    </div>
  );
};
