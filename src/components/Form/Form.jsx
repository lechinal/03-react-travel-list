import React from 'react';

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😎 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, index) => index + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
