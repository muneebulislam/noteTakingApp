/* eslint-disable react/prop-types */
const TodoDelete = ({id}) => {
    const deleteTodo = async (id) => {
      try {
        await fetch(`http://localhost:5000/todos/${id}`, {
          method: 'DELETE',
        });
        window.location = '/';
      } catch (err) {
        console.error(err.message);
      }
    };
  
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    );
  };

export default TodoDelete;
  