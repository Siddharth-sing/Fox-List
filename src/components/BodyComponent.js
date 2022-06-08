import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { db } from "../firebaseconfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

export default function BodyComponent() {
  const [tasks, setTask] = useState("");
  const [list, setTasksList] = useState([]);
  const [visible, setVisibility] = useState(true);

  const usersCollectionRef = collection(db, "list");
  var todo = document.getElementById("listView");
  const handleAddBtn = () => {
    if (!tasks) {
      console.log("empty field");
    } else {
      addToDatabase();
    }
  };

  const addToDatabase = () => {
    try {
      const docRef = addDoc(usersCollectionRef, {
        task: tasks,
      });
      console.log("Pushed successfully to firestore");
      getList()
      poppulateList()
    } catch (error) {
      console.log(error);
    }
  };
  const getList = async () => {
    const data = await getDocs(usersCollectionRef);
    setTasksList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const poppulateList = () => {
    todo.innerHTML = "";
    list.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item.task;
      todo.appendChild(li);
    });
  };
  
  useEffect(() => {
      getList();
      if (list.length === 0) {
        console.log(list.length);
      }else {
        setVisibility(false);
        poppulateList();
    }
  });
  return (
    <div>
      <div style={{ width: "100%", height: "100%", padding: "20px" }}>
        <div className="f-main-container">
        <span><img style={{height:'15%',width:'15%', }} src="images/fox.png" alt="" /></span><br />
          <ValidationTextField
            className="input-notes"
            id="notes"
            color="secondary"
            variant="standard"
            label="Enter your note"
            
            onChange={(e) => setTask(e.target.value)}
          />
          <IconButton
            className="add-btn"
            color="primary"
            aria-label="add to shopping cart"
            size="large"
            onClick={handleAddBtn}
          >
            <AddIcon />
          </IconButton>
          <br />

          <CircularProgress
            style={{ display: visible ? "visible" : "none" }}
            className="progress-flex-item"
            color="success"
          />
          <div className="todo-list">
            <ol className="o-list" id="listView"></ol>
          </div>
        </div>
      </div>
    </div>
  );
}
