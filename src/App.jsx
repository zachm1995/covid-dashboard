import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.scss";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [data, setData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loaded, setloaded] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from api, update in state
  const fetchData = async () => {
    try {
      const url = "https://data.cdc.gov/resource/9bhg-hcku.json?state=United+States";
      const data = await axios
        .get(url)
        .then((resp) => {
          setData(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
        setloaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Handles user text search
  const handleSearch = (event) => {
    let query = event.target.value;
    if (query.length > 2) {
    }
    console.log(query);
  };

  return (
    <div className="app-container">
      <Header handleSearch={handleSearch} />
      <Dashboard data={data} loaded={loaded} />
    </div>
  );
}

export default App;
