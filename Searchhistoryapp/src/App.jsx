import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [historyList, setHistoryList] = useState([
    { id: 1, timeAccessed: "2022-01-01", logoUrl: "logo1.png", title: "Page 1", domainUrl: "example1.com" },
    { id: 2, timeAccessed: "2022-01-01", logoUrl: "logo1.png", title: "Page 2", domainUrl: "example1.com" },
    { id: 3, timeAccessed: "2022-01-01", logoUrl: "logo1.png", title: "Page 3", domainUrl: "example1.com" },
    // Add more history items as needed
  ]);
  const [searchInput, setSearchInput] = useState('');

  const deleteHistory = (itemId) => {
    const updatedHistory = historyList.filter(item => item.id !== itemId);
    setHistoryList(updatedHistory);
  };

  const searchHistory = () => {
    const searchInputValue = searchInput.toLowerCase();
    const filteredHistory = historyList.filter(item =>
      item.title.toLowerCase().includes(searchInputValue) || item.domainUrl.toLowerCase().includes(searchInputValue)
    );

    setHistoryList(filteredHistory);
  };

  const displayHistory = () => {
    if (historyList.length === 0) {
      return <p>Empty History View</p>;
    }

    return (
      <ul>
        {historyList.map(item => (
          <li key={item.id}>
            <img src={item.logoUrl} alt="app logo" />
            <span>{item.title} ({item.domainUrl})</span>
            <button onClick={() => deleteHistory(item.id)}>
              <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" />
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchHistory}>
          <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" />
        </button>
      </div>

      {displayHistory()}
    </div>
  );
};

export default App;
