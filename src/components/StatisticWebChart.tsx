import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

const StatisticsWebChart: React.FC<ApexChartProps> = () => {
  const chartData = {
    series: [
      {
        name: "Points",
        data: [
          600000, 2300000, 200000, 800000, 3900000, 1080000, 1005000, 900000,
          125000, 600000, 1905000, 55000,
        ],
      },
      {
        name: "Points 2",
        data: [
          300000, 5200000, 100000, 400000, 6800000, 2070000, 200000, 450000,
          150000, 900000, 1205000, 90000,
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "line",
      },
      stroke: {
        width: 2,
        curve: "smooth", // Changed to 'smooth' for curvier lines like in the image
      },
      markers: {
        size: 0,
        hover: {
          size: 10,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          format: "MM/yyyy",
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01-01-2024",
          "02-02-2024",
          "03-03-2024",
          "04-04-2024",
          "05-05-2024",
          "06-06-2024",
          "07-07-2024",
          "08-08-2024",
          "09-09-2024",
          "10-10-2024",
          "11-11-2024",
          "12-12-2024",
        ],
        tickAmount: 10,
        labels: {
          style: {
            colors: "#748AA1", // Set label colors to white
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#40475D", // Match grid color to image
        strokeDashArray: 5,
      },
      yaxis: {
        show: false, // Hide y-axis labels
      },
      colors: ["#5B1CD4", "#3F464E"], // Use a purple color to match the image
      title: {
        text: "Total points",
        align: "left",
        style: {
          color: "#fff", // Setting title color
          fontSize: "20px",
          fontWeight: 400,
          fontFamily: "Roboto",
        },
      },
      legend: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#a55eea", null], // Gradient color
          stops: [0, 100],
        },
      },
    },
  };

  return (
    <div id="chart" className="bg-[#151322] rounded-2xl ">
      <ReactApexChart
        // @ts-ignore
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={450}
      />
    </div>
  );
};

export default StatisticsWebChart;
