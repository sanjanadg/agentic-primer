
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './App.css'; 

function EntryList({ entries }) {
    if (!entries.length) return <p>No entries yet.</p>;
  
    return (
      <ul>
        {entries.map((entry) => (
          <div key={entry.id} class = "random-content">
            <FontAwesomeIcon icon={faStar} className="icon"/>
            {entry.content}
          </div>
        ))}
      </ul>
    );
  }
  

  export default EntryList;
  