import { useState } from "react";

// 18. Change the props to reflect the new prop being sent
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
    // 13. Change the submit handler to make a post request to http://localhost:3000/todo instead of setting the data state
    await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    // 14. Demonstrate that even though you're adding to the db, the list is only updating if you refresh the page

    // 19. In the submit handler, after the fetch request is complete, set the new state value to true and demonstrate the live reload of the todo list
    setNewPost(true);
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
