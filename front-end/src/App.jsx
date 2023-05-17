// 7. Import useEffect
import { useState, useEffect } from "react";
import ListItem from "./components/ListItem.jsx";
import Form from "./components/Form.jsx";
import "./App.css";

function App() {
  // 8. Delete hardcoded data state value
  const [data, setData] = useState([]);
  const [isTodoListVisible, setIsTodoListVisible] = useState(false);

  // 15. Create a piece of state that is a boolean
  const [newPost, setNewPost] = useState(false);

  // 9. Call useEffect and declare a fetch function inside of useEffect's anon function
  useEffect(() => {
    async function fetchTodos() {
      // 10. Have the fetch request make a get request to http://localhost:3000/todo
      const response = await fetch("http://localhost:3000/todo");
      const todos = await response.json();

      // 11. Set the data state to the return value of the request
      setData(todos);
    }

    // 12. Call the fetch request function inside the useEffect
    fetchTodos();

    // 16. Put that state's value variable into the dependancy array of the useEffect
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
      {/* 17. Pass that state's set function to the Form component instead of data and setData */}
      <Form setNewPost={setNewPost} />
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
