/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReactApexChart from "react-apexcharts";

interface ChartOptions {
  bar: ApexCharts.ApexOptions;
  pie: ApexCharts.ApexOptions;
}

interface ChartsProps {
  type: "bar" | "pie";
  series: ApexCharts.ApexOptions["series"];
  height: number | string;
  width: number | string;
  categories?: string[];
}

export const Charts = ({
  type,
  series,
  width,
  height,
  categories,
}: ChartsProps) => {
  const chartOptions: ChartOptions = {
    bar: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        width,
        height,
      },
      grid: {
        borderColor: "#9AA8C0",
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#F2EFFF"],
      plotOptions: {
        bar: {
          borderRadius: 8,
          borderRadiusApplication: "around",
          columnWidth: "32px",
          colors: {
            ranges: [
              {
                from: 0,
                to: Infinity,
              },
            ],
          },
        },
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            fontSize: "12px",
            fontFamily: "inherit",
          },
          showDuplicates: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        marker: {
          show: false,
        },
        y: {},
        style: {
          fontSize: "12px",
        },
      },
      legend: {
        show: false,
      },
    },
    pie: {
      chart: {
        type: "pie",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        width,
        height,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
      legend: {
        position: "bottom",
      },
      labels: categories,
      series,
    },
  };

  return (
    <ReactApexChart options={chartOptions[type]} type={type} series={series} />
  );
};
