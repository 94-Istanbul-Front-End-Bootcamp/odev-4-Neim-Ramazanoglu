import ReactStars from "react-rating-stars-component";
import React, { useState } from 'react';

import "./List.css";
const List = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [editing, setEditing] = useState(0);
  const ratingChanged = (newRating) => {
        setEditing(newRating);
        if (userInput.length >= 3 && newRating != 0 ) setDisabled(false);
        else setDisabled(true);
  };

  const [userInput, setUserInput] = useState("");
  const [disabled, setDisabled] = useState(true);
  const onInputChange = (e) => {
    const newVal = e.target.value;
    setUserInput(newVal);
    if (newVal.length >= 3 && editing != 0 ) setDisabled(false);
    else setDisabled(true);
  };

  const [text, setText] = useState([]);
 const btnYorum =(e) => {
    setText([...text, userInput])
    setUserInput("");
    //
  };

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
      
        <h3>{text.length === 0 ? "Henüz hiç yorum yok." : ""}</h3>
        {text.map((a, i) => {
          return (
            <div >
              <p>{a}</p>
              <p className="List"><ReactStars
            count={5}
            onChange={(ratingChanged)}
            size={30}
            activeColor="#ffd700"
            value={editing}
          /></p>
              <br />
            </div>
          );
        })}
       
        <input type="text" value={userInput} onChange={onInputChange} /><br></br>
        
        <div className="stars">
      <ReactStars
            count={5}
            onChange={(ratingChanged)}
            size={40}
            activeColor="#ffd700"
          />
            </div><br></br>
        <button onClick={btnYorum} disabled={disabled}>Gönder</button>
      </form>
    </div>
  );
};

export default List;
