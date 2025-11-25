import { useState } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const serachResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="search" onChange={handleChange} />
      <ul>
        {serachResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
