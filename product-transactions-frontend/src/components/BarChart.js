// src/components/BarChart.js
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = ({ month }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchBarChartData = async () => {
      const response = await axios.get(`http://localhost:8000/api/barchart`, { params: { month } });
      const labels = response.data.map(data => data.range);
      const data = response.data.map(data => data.count);
      setChartData({
        labels,
        datasets: [{
          label: 'Number of Items',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      });
    };
    fetchBarChartData();
  }, [month]);

  return (
    <div>
      <Bar data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
    </div>
  );
};

export default BarChart;
