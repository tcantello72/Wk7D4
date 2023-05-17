import { useState } from "react";

function Form({ data, setData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      time,
    };
    setData([...data, newTodo]);
    setTitle("");
    setDescription("");
    setTime("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
