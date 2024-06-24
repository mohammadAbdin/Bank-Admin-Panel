import React, { useEffect, useState, useCallback } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import goldPricesData from "../GoldData"; // Adjust the import path as needed

// Register Chart.js components
Chart.register(...registerables);

interface GoldPricesChartProps {
  base: string; // base currency, e.g., USD
}

const GoldPricesChart: React.FC<GoldPricesChartProps> = ({ base }) => {
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(12);

  // Function to handle resizing
  const handleResize = useCallback(() => {
    // if (window.innerWidth < 1000) {
    //   setFontSize(15); // Smaller font size for small screens
    // } else {
    //   setFontSize(12); // Default font size
    // }
  }, []);

  useEffect(() => {
    const processStaticData = () => {
      // Format the data as needed for the chart
      const formattedData = goldPricesData.map((entry) => ({
        date: new Date(entry.date).toLocaleDateString(), // Format the date for display
        price: entry.price, // Use the price directly
      }));

      const labels = formattedData.map((entry) => entry.date);
      const prices = formattedData.map((entry) => entry.price);

      setChartData({
        labels,
        datasets: [
          {
            label: "Gold Price (XAU)",
            data: prices,
            fill: false,
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
          },
        ],
      });

      setLoading(false);
    };

    processStaticData();
    handleResize(); // Set initial font size based on window size

    window.addEventListener("resize", handleResize); // Add event listener
    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, [base, handleResize]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            // size: fontSize,
          },
        },
      },
      tooltip: {
        bodyFont: {
          // size: fontSize,
        },
        titleFont: {
          // size: fontSize,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            // size: fontSize,
          },
        },
      },
      y: {
        ticks: {
          font: {
            // size: fontSize,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "90%", height: "400px" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

export default GoldPricesChart;
