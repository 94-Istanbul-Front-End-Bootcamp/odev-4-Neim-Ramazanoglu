import ReactStars from "react-rating-stars-component";

import "./List.css";

function List(props) {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //   };
  // const [editing, setEditing] = useState(0);
  const { handleComment, ratingChanged, yorum, comments } = props;

  //   const [userInput, setUserInput] = useState("");
  //   const onInputChange = (e) => {
  //     const newVal = e.target.value;
  //     setUserInput(newVal);

  //   };

  //  const [text, setText] = useState([]);
  //  const btnYorum =(e) => {
  //     setText([...text, userInput])
  //     setUserInput("");
  //     //
  //   };

  return (
    <div>
      <ul>
        <h3>{comments.length === 0 ? "Henüz hiç yorum yok." : ""}</h3>
        {comments.map((comment) => {
          return (
            <div>
              <li key={comment.id}>{comment.text}</li>
              <li className="List">
                <ReactStars
                  count={5}
                  edit={false}
                  size={30}
                  activeColor="#ffd700"
                  value={comment.vote}
                />
              </li>
              <br />
            </div>
          );
        })}
      </ul>
      <input type="text" onChange={yorum} id="yorum" />
      <br></br>

      <div className="stars">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          activeColor="#ffd700"
        />
      </div>
      <br></br>
      <button onClick={handleComment}>Gönder</button>
    </div>
  );
}

export default List;
