import { useState } from "react";
import ListItem from "./components/ListItem.jsx";
import Form from "./components/Form.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      title: "Have Breakfast",
      description: "2 eggs on toast",
      time: "7am",
    },
    {
      title: "Cardio",
      description: "Jog 5km",
      time: "8am",
    },
    {
      title: "Start Work",
      description: "Log onto machine and open all relevant software",
      time: "9am",
    },
  ]);
  const [isTodoListVisible, setIsTodoListVisible] = useState(false);

  return (
    <div className="App">
      {!isTodoListVisible ? (
        <button onClick={() => setIsTodoListVisible(true)}>
          Show Todo List
        </button>
      ) : (
        <h1>Todo List</h1>
      )}
      <Form data={data} setData={setData} />
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
