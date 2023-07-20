import {
  Stats,
  StatsProps,
  Chips,
  ChipsProps,
  AdminTable,
  Disbursal,
  ChartContainer,
  Charts,
} from "../../components";
import { ReactComponent as TotalFee } from "../../assets/dashboard/totalFee.svg";
import { ReactComponent as Balance } from "../../assets/dashboard/balance.svg";
import { ReactComponent as Defaulters } from "../../assets/dashboard/defaulters.svg";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import { DashboardService } from "../../services/DashboardService";

const MONTH_MAP: Record<string, string> = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

interface PieChartData {
  labels: string[];
  data: number[];
}

export const Dashboard = () => {
  const [totalCollection, setTotalCollection] = useState<number>();
  const [classNStudents, setClassNStudents] = useState<{
    total: number;
    classes: number;
    sections: number;
  }>();
  const [paymentMode, setPaymentMode] = useState<PieChartData | undefined>();
  const [currentMonthCollection , setCurrentMonthCollection] = useState<number>();
  const [monthlyCollection, setMonthlyCollection] = useState<
    { x: string; y: number }[]
  >([]);
  
  const getAllPaymentModes = async() => {
    const res = await DashboardService.getAllPaymentModes();
    if(!res)return;
    console.log("res.data" , res.data);
    setPaymentMode(res.data as PieChartData);
    
  }
  const getCurrentMonthCollection  = async()=>{
    const res = await DashboardService.collectOfCurrentMonth();
    if (!res.data) return;
    console.log("res.data", res.data);
    setCurrentMonthCollection(res.data as number);
  }
  const getTotalCollection = async () => {
    const res = await DashboardService.getTotalCollection();
    if (!res.data) return;
    setTotalCollection(res.data as number);
  };

  const getStudentClassData = async () => {
    const res = await DashboardService.getTotalStudent();
    if (!res.data) return;
    const { distinctClassCount, sectionCount, studentCount } = res.data as {
      distinctClassCount: number;
      sectionCount: number;
      studentCount: number;
    };
    setClassNStudents({
      total: studentCount,
      classes: distinctClassCount,
      sections: sectionCount,
    });
  };

  const getMonthlyCollection = async () => {
    const res = await DashboardService.getMonthlyCollection();
    if (!res.data) return;
    const amountByMonth: Record<string, number> = {};
    (res.data as { month: string; amount: number }[]).forEach((item) => {
      amountByMonth[item.month] = item.amount;
    });

    setMonthlyCollection(
      Object.entries(MONTH_MAP).map(([key, value]) => ({
        x: value,
        y: amountByMonth[key] ?? 0,
      }))
    );
  };

  const financialStats: StatsProps[] = [
    {
      title: "Collection till date",
      amount: `₹${totalCollection ? Number(totalCollection) || 0 : 0}`,
      icon: <TotalFee />,
      increment: true,
      percentage: "10%",
      color: "green",
    },
    {
      title: "Balance",
      amount: "₹2.4L",
      icon: <Balance />,
      color: "blue",
    },
    {
      title: "Defaulters",
      amount: (
        <div className="defaulters">
          <span className="current">11</span>
          <span className="total">/ {classNStudents?.total} Students</span>
        </div>
      ),
      icon: <Defaulters />,
      increment: false,
      percentage: "11%",
      color: "red",
    },
  ];

  const stats: ChipsProps[] = [
    {
      label: "Students",
      value: classNStudents?.total ?? 0,
    },
    {
      label: "Sections",
      value: (
        <div className="sectionContainer">
          <span className="section">{classNStudents?.sections}</span>
          <span className="classes">in {classNStudents?.classes} Classes</span>
        </div>
      ),
    },
    {
      label: "Collection this month",
      value: `₹${
        currentMonthCollection ? Number(currentMonthCollection) || 0 : 0
      }`,
    },
    {
      label: "FIne Collected till date",
      value: "₹11.20L",
    },
  ];


  useEffect(() => {
    void getTotalCollection();
    void getStudentClassData();
    void getMonthlyCollection();
    void getAllPaymentModes();
    void getCurrentMonthCollection();
  }, []);
  return (
    <div className="Dashboard">
      <div className="title">DAV Public School, Bhilai</div>
      <div className="financialStatsContainer">
        {financialStats.map(
          ({ title, amount, icon, increment, percentage, color }) => (
            <Stats
              key={title}
              title={title}
              amount={amount}
              icon={icon}
              increment={increment}
              percentage={percentage}
              color={color}
            />
          )
        )}
      </div>

      <div className="statsContainer">
        {stats.map(({ label, value }) => (
          <Chips key={label} label={label} value={value} />
        ))}
      </div>
      <div className="overview">
        <ChartContainer
          style={{ flex: "0 0 65%" }}
          title="Overview"
          desc="Monthly Collection"
        >
          <Charts
            width="543px"
            height="226px"
            type="bar"
            series={[{ data: monthlyCollection, name: "Collection" }]}
          />
        </ChartContainer>
        <ChartContainer
          style={{ flex: "0 0 32%" }}
          title="Payment Mode"
          desc="Split between Online, Cash and Cheque for collections till date"
        >
          <Charts
            width="150px"
            height="150px"
            type="pie"
            categories={paymentMode ? paymentMode.labels : []}
            series={paymentMode ? paymentMode.data : []}
          />
        </ChartContainer>
      </div>

      <div className="table-container">
        <AdminTable />
        <Disbursal />
      </div>
    </div>
  );
};
