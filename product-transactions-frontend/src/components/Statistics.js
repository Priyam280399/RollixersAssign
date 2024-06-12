// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ month }) => {
  const [stats, setStats] = useState({ totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await axios.get(`http://localhost:8000/api/statistics`, { params: { month } });
      setStats(response.data);
    };
    fetchStatistics();
  }, [month]);

  return (
    <div className="statistics">
      <div>Total Sale Amount: <span>{`$${stats.totalSaleAmount}`}</span></div>
      <div>Total Sold Items: <span>{stats.totalSoldItems}</span></div>
      <div>Total Not Sold Items: <span>{stats.totalNotSoldItems}</span></div>
    </div>
  );
};

export default Statistics;
