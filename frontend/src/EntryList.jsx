function EntryList({ entries }) {
    if (!entries.length) return <p>No entries yet.</p>;
  
    return (
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.content}</li>
        ))}
      </ul>
    );
  }
  

  export default EntryList;
  