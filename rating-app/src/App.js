import './App.css';
import Yorum from './components/Yorum/Yorum'
import List from './components/ListComp/List';
import  { Component } from 'react';
   
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      text: [],
    };
  }
  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  btnYorum =(e) => {
    debugger;
    this.setState({
      text: [...this.state.text, this.state.userInput],
      
   
    });
  };
  render() {
  return (
    <div className="App">
      <Yorum />
      <List
      userInput={this.state.userInput}
      onInputChange={this.onInputChange}
      btnYorum={this.btnYorum}
      text={this.state.text}
      />

    </div>
  );
}
}

export default App;
