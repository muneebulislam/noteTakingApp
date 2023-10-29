import { useState } from 'react';

function FormComponent() {
  // Use state hook to store the input value
  const [description, setDescription] = useState('');

  // Handle the input change event
  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  // Handle the form submit event
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make a fetch post request to send the text data
    const response = await fetch('http://localhost:5000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });
    // Handle the response
    if (response.ok) {
      console.log('Data sent successfully');
    } else {
      console.log('To do data was not sent correctly!');
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <label className='text-xl'>Enter your todo </label>
            <input className="border border-gray-300 rounded px-2 py-1 m-2 " type="text" id="todo" value={description} onChange={handleChange} />
        <button className="bg-blue-500 text-white rounded px-2 py-1 m-2" type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;

