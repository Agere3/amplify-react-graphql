import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

constructor(props){
  super(props)
  this.state={
    nombre:"",
    pwd:""
  }
}

handleChange = (event) => {
  event.preventDefault();
  const {name,value} = event.target;
  this.setState({[name]:value});
  console.log(this.state)
}


  render(){
    return(
      <div className='App'>
          <form method='POST' action="http://localhost:3002">
            <div className='nombre'>
              <label htmlFor='nombre'>Mete tu nombre</label>
              <input type="text" name="nombre" onChange={this.handleChange}/>
            </div>
            <div className='pwd'>
              <label htmlFor='pwd'>Mete tu pwd</label>
              <input type="text" name="pwd" onChange={this.handleChange}/>
            </div>
            <div className='submit'>
              <input type="submit"/>
            </div>
          </form>
      </div>
    )
  }
 
}

export default App;
