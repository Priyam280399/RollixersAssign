import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';

const App = () => {
  const [month, setMonth] = useState('03');
  const [searchQuery, setSearchQuery] = useState('');

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <h1>Product Transactions</h1>
      <div className="controls">
        <label htmlFor="month-select">Select Month:</label>
        <select id="month-select" value={month} onChange={handleMonthChange}>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <input
          type="text"
          id="search-box"
          placeholder="Search transactions"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Statistics month={month} />
      <TransactionsTable month={month} searchQuery={searchQuery} />
      <BarChart month={month} />
    </div>
  );
};

export default App;
