import { useState, useEffect } from "react";
import ListItem from "./components/ListItem.jsx";
import Form from "./components/Form.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isTodoListVisible, setIsTodoListVisible] = useState(false);

  const[newPost, setNewPost] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("http://localhost:3000/todo");
      const todos = await response.json();
      setData(todos);
    }

    fetchTodos()
    setNewPost(false)
  }, [newPost]);

  return (
    <div className="App">
      {!isTodoListVisible ? (
        <button onClick={() => setIsTodoListVisible(true)}>
          Show Todo List
        </button>
      ) : (
        <h1>Todo List</h1>
      )}
      <Form setNewPost={setNewPost}/>
      {isTodoListVisible && (
        <ol>
          {data.map((itemObj, index) => (
            <ListItem
              key={index}
              title={itemObj.title}
              description={itemObj.description}
              time={itemObj.time}
            />
          ))}
          <button onClick={() => setIsTodoListVisible(false)}>
            Hide Todo List
          </button>
        </ol>
      )}
    </div>
  );
}

export default App;
