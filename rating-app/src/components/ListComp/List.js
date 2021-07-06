
const List = ({ userInput, onInputChange, btnYorum, text }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
    };
    
    return(
        <form className="input" onSubmit={handleSubmit}>
             {text.map((a, i) => {     
           console.log("Entered");                 
           return (<div><h1>{a}</h1><br/></div>)
        })}
            <input
        type="text"
        value={userInput}
        onChange={onInputChange}
        />
            <button onClick={btnYorum}>Gönder</button>
        </form>
        
        
    ) 
}

export default List;