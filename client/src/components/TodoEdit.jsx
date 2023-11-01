import { useState } from "react";
// eslint-disable-next-line react/prop-types
const  TodoEdit = ({ todo_id }) => {
    const [description, setDescription] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const body = { description };
          await fetch(`http://localhost:5000/todos/${todo_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          window.location = '/';
        } catch (err) {
          console.error(err.message);
        }
      };

      return (
        <>
          <button
            type='button'
            className='btn btn-warning'
            data-toggle='modal'
            data-target={`#id${todo_id}`}
          >
            Edit
          </button>
      
          <div className='modal' id={`id${todo_id}`}>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h4 className='modal-title'>Edit Todo</h4>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    onClick={() => setDescription(description)}
                  >
                    &times;
                  </button>
                </div>
      
                <div className='modal-body'>
                  <input
                    type='text'
                    className='form-control'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
      
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-warning'
                    data-dismiss='modal'
                    onClick={(e) => onSubmit(e)}
                  >
                    Save Changes
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'
                    onClick={() => setDescription(description)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  };

export default TodoEdit;