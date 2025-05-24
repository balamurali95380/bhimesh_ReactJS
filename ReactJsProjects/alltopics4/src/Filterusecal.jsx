import React, { useState ,useCallback} from "react";
import List from "./List";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];
const Filter = () => {
  const [query, setQuery] = useState("");
   console.log("App Component Rendered!");

  // Filter function recreated on every render
  const filterItems = () => {
    console.log("filterItems Function Executed!");
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };
//     const filterItems = useCallback(() => {
//         console.log("filterItems Function Executed!");
//     return items.filter((item) =>
//       item.name.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [query]);

  return (
    <div>
      <h2>Search Fruits</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to filter..."
      />
      <List filterFunction={filterItems} />
    </div>
  );
};

export default Filter;

