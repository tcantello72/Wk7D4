import { useState } from "react";

function Form({ setNewPost }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      time,
    };
    await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify(newTodo)
    });

    setNewPost(true)
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
