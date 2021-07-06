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
      disabled: true,
    };
    
  }
  onInputChange = (e) => {
    debugger;
    
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
    if (newVal.length >= 3 ) this.state.disabled=false;
    else this.state.disabled=true;
  };
   
  btnYorum =(e) => {
    
    this.setState(
      {
      text: [...this.state.text, this.state.userInput],
      
    },
    () => {
      this.setState({
        userInput: "",
      });
    })
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
      disabled = {this.state.disabled}
      />
      
    </div>
  );
}
}

export default App;
