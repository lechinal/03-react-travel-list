import React, { useState } from 'react';

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😎 trip?</h3>
      <select
        value={quantity}
        onChange={event => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={event => setDescription(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
