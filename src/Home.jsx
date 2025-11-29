import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [input, setinput] = useState(" ");
  const [Store, setStore] = useState([]);

  const [Edits, setEdits] = useState("");
  const [EditValue, setEditValue] = useState(null);

  // input value convert for onChange
  const InputEvent = (event) => {
    setinput(event.target.value);
  };

  // Input reading and value processed
  const StoreData = () => {
    if (input.trim() === "") {
      alert("Please Enter your task here");
      return;
    }
    // store the data in useState
    setStore([...Store, input]);
    setinput("");
  };
  // Delelte button
  const DeletedBtn = (d) => {
    setStore(Store.filter((e) => e != d));
  };

  // for Edit btn
  const startEdit = (e, task) => {
    setEditValue(e); // Assigne the key in storing the data
    setEdits(task); //input data from edit
  };

  // input checking for edit
  const saveEdit = (e) => {
    if (Edits.trim() === "") {
      alert("Enter your task here");
      return;
    }
    // updating value from DataStorage
    const UpdateTasks = [...Store];
    UpdateTasks[e] = Edits;
    setStore(UpdateTasks);
    setEditValue(null);
    setEdits("");
  };

  // cancel btn for edit
  const CancelBtn = () => {
    setEditValue(null);
    setEdits(" ");
  };

  return (
    <>
      <div className="container">
        <h2>Todo List</h2>
        <div className="container2">
          <input //frist input
            type="text"
            className="Input-1"
            placeholder="Enter your task here.."
            value={input} //value
            onChange={InputEvent} //oncohage
          />
          <button className="btn-1" onClick={StoreData}>
            Add
          </button>
          {Store.map(
            (
              task,
              index // maping data using uniueq key
            ) => (
              <p className="store-1" key={index}>
                {EditValue === index ? ( // index is create unique id in store
                  <>
                    <input
                      type="text"
                      placeholder="Enter your request here"
                      value={Edits} //value
                      onChange={(e) => setEdits(e.target.value)} //onchange here
                      className="Input-1"
                    />
                    <button className="btn-1" onClick={() => saveEdit(index)}>
                      Save
                    </button>
                    <button className="Cancel-btn" onClick={CancelBtn}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span>{index + 1}.</span> {task}
                    <span>
                      <button
                        className="Delete-btn"
                        onClick={() => DeletedBtn(task)}
                      >
                        Delete
                      </button>
                      <button
                        className="Edit-btn"
                        onClick={() => startEdit(index, task)}
                      >
                        Edit
                      </button>
                    </span>
                  </>
                )}
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
}
