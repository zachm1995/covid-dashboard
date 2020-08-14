import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.scss";
import SearchBox from "./components/search_box/SearchBox";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let url = "https://data.cdc.gov/resource/9bhg-hcku.json";
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setItems(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app-container">
      <SearchBox />
      <Dashboard items={items} />
    </div>
  );
}

export default App;
