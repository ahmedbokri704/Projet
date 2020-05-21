import React, { useState, useEffect } from "react";
import axios from "axios";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [iduser, setIduser] = useState("");

  useEffect(() => {
    setIduser(localStorage.getItem("iduser"));
    async function getUsers() {

      const response = await axios.get(
        `http://localhost:7000/api/users/${iduser}`
      );
      setTasks(response.data);
    }
    getUsers();
  }, [tasks]);

const addPost = ()=>{
  axios.put(
    `http://localhost:7000/api/users/newtask/${iduser}`,{text:text}
  );
}
const deletePost = (index)=>{
  axios.put(
    `http://localhost:7000/api/users/deletetask/${iduser}/${index}`
  );
}

  return (
    <div>
      <h1>To-Do App!</h1>
      <h3>Add New To-Do</h3>
      <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Enter new task" className="new-task" />
      <button onClick={addPost }>Add</button>
      {tasks.map((elt, index) => (
        <div key={index} style={{ display: "flex" }}>
          <p>{elt.text}</p>
          <button onClick={()=>deletePost(index) }>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDo;