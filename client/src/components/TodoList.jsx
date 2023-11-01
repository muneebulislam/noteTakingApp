import { useState, useEffect } from "react";
import TodoDelete from "./TodoDelete";
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
  }, []); // Runs every time a new item is added

  // Return a JSX element that renders the list of items using map method
  return (
    <div>
        <h1>List of todos is given below</h1>
    <tbody>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <tr key={item.todo_id}>
        <td className="mx-3">{item.description}</td>
        <td className="mx-3">Edit</td>
        <td className="mx-3"><TodoDelete id={ item.todo_id }/></td>
        </tr>
      ))}
    </tbody>
    </div>
  );
}

export default TodoList;