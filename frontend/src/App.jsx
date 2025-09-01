import { useState, useEffect } from "react";
import axios from "axios";
import EntryList from "./EntryList";

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

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="App">
      <h1>Database Entries</h1>
      <button onClick={generateEntry}>Generate Random Entry</button>
      <EntryList entries={entries} />
    </div>
  );
}


export default App;
