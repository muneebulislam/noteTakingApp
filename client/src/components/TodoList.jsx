import { useState, useEffect } from "react";

function TodoList() {
  // Initialize an empty array as a state variable
  const [items, setItems] = useState([]);

  // Use useEffect hook to perform the fetch request
  useEffect(() => {
    // Use the fetch API to make a GET request to the database URL
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => {
        // Use setState to update the list of items with the JSON data
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [items]); // Runs every time a new item is added

  // Return a JSX element that renders the list of items using map method
  return (
    <div>
        <h1>List of todos is given below</h1>
    <ul>
      {items.map((item) => (
        <li key={item.todo_id}>{item.description}</li>
      ))}
    </ul>
    </div>
  );
}

export default TodoList;