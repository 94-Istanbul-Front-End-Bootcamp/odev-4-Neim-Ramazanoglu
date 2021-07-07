import './App.css';
import Yorum from './components/Yorum/Yorum'
import List from './components/ListComp/List';
import  { Component } from 'react';



class App extends Component{
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
    id: 0
  }
  handleComment = () => {
    
    const newState = this.state;
  
    newState.comments.push({ 
        id: Math.random(),
        text: this.state.commentValue, 
        vote: this.state.vote,
         
    });
    newState.commentValue = "";
    newState.vote = 0;
    newState.id = 0;
  
    this.setState({
      ...newState
    });
  }
  

   ratingChanged = (newRating) => {
    if (newRating > 0) {
      this.setState({vote: newRating})
    }

  };
  
   yorum = () => {
    let x = document.getElementById("yorum").value;
  
    if (x.length > 3) {
      this.setState({commentValue: x})

    }
  };
  
  render() {
  return (
    <div className="App">
      <Yorum />
      <List 
      handleComment={this.handleComment}
      comments={this.state.comments}
      ratingChanged={this.ratingChanged}
      yorum = {this.yorum}/>
    </div>
  );
}
}

export default App;
