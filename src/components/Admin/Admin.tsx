import "./Admin.scss";

const admins = [
  { name: "Prashant Kumar", role: "Super Admin" },
  { name: "Jasraj Singh Bhatia", role: "Admin" },
  { name: "Tarun Khelia", role: "Admin" },
  { name: "Aditya Mullay", role: "Management Staff" },
];

export const AdminTable = () => {
  return (
    <div className="admin-container">
      <div className="admin-title">Admins</div>
      <div className="admin-labels">
        <label className="head-title">Name</label>
        <label className="head-title">Role</label>
      </div>
      {admins.map((admin, index) => (
        <div className="admin-data" key={index}>
          <label className="admin-data-value">{admin.name}</label>
          <label className="admin-data-value">{admin.role}</label>
        </div>
      ))}
    </div>
  );
};
