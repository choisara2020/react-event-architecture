import React from "react";

export const Form = () => {
  const save = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={save}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Number:
          <input type="number" name="phone" />
        </label>

        <button>Save</button>
      </form>
    </>
  );
};
