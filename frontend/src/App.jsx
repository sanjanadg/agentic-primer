import { useState, useEffect } from "react";
import axios from "axios";
import EntryList from "./EntryList";
import './App.css'; 

function App() {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/entries/");
      console.log("Fetched entries:", res.data);
      setEntries(res.data);
    } catch (err) {
      console.error("Error fetching entries:", err);
    }
  };

  const generateEntry = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/generate/");
      fetchEntries(); // refresh after adding
    } catch (err) {
      console.error("Error generating entry:", err);
    }
  };

  const clearDatabase = async () => {
    try{
      await axios.delete("http://127.0.0.1:8000/clear/")
      setEntries([])
    } catch(err){
      console.error("Error clearing database:", err)
    }
  }

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="App" class="container">
      <h1>Database Entries</h1>

      <div class = "button-row">
      <div class = "button">
        <button onClick={generateEntry}>Generate Random Entry</button>
      </div>
      <div class = "button">
        <button onClick= {clearDatabase}>Clear Database</button>
      </div>
      </div>
      
      <EntryList entries={entries} />
    </div>
  );
}

export default App;
