import './App.css';
import Yorum from './components/Yorum/Yorum'
import List from './components/ListComp/List';
import  { Component } from 'react';

   
class App extends Component{
  constructor(props) {
    super(props);
    
  }
  
  render() {
  return (
    <div className="App">
      <Yorum />
      <List />
    </div>
  );
}
}

export default App;
