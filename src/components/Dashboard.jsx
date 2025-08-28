import React from "react";
import Card from "./Card";
import { FaShoppingCart, FaBox, FaUsers, FaCog } from "react-icons/fa";
import { dataLine, dataBar } from "../assets/ChartData";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
Chartjs.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Dashboard = () => {
  return (
    <div className="grow p-8 ">
      <h2 className="text-2xl mb-4 ">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card icon={<FaShoppingCart />} title="Oders" value="140" />
        <Card icon={<FaBox />} title="Products" value="120" />
        <Card icon={<FaUsers />} title="Customers" value="30" />
        <Card icon={<FaCog />} title="Settings" value="11" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text=lg font-semibold mb-4">Sales Data</h3>
          <Line data={dataLine} />
        </div>
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text=lg font-semibold mb-4">Products Data</h3>
          <Bar data={dataBar} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
