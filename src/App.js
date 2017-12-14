import React, { Component } from 'react';
import './App.css';

import englishUnicode from './EnglishUnicode.json';
import marathiUnicode from './MarathiUnicode.json';

  
class App extends Component {
 

constructor(){
  super();
  this.state ={
    isSelected: false,
    datafinal :[]
  };
  this.marathiHandler = this.marathiHandler.bind(this);
  this.englishHandler =  this.englishHandler.bind(this);
}
marathiHandler(event){
  this.setState({isSelected:true});
}
englishHandler(event){
  this.setState({isSelected: false}); 
}
componentDidMount(){
  const url = 'http://192.168.1.9:80/BusinessCard/ws_post_card.php?getloginid=10D86474-1D1B-47CB-8EAF-E806BD187824';
  return fetch(url).then(response => response.json()).then(data => {console.log('success');
    console.log(data);
  this.setState({datafinal:data})}).catch(error=>console.log('error'));
}
  render() {
  var maindata = Object.entries(this.state.datafinal).map(([key,value])=>{
    return <div> {key.business_cardid} {value.fullname}</div>
  });

   if(this.state.isSelected){
    console.log(this.state.isSelected);
    var marathi = Object.entries(marathiUnicode).map(([key,value])=>{
      return (
          <div className='label'>
             {key} : 
             <input className='inputText' type ='text' value={value} />
          </div>
      );
    });
  }else{
    var english = Object.entries(englishUnicode).map(([key,value])=>{
      return (
        <div className='label'>
          {key} : 
          <input className='inputText' type ='text' value={value} />
       </div>
      );
    });
  }
  
    return (
      <div className="App">
        <h1>Welcome to Date Panchang  </h1>
  <div className='container'>
      {maindata}
        <table >
          <tr>
            <td>
              <button className='button' input='button' onClick={this.marathiHandler}>Marathi</button>
              <button className='button' input='button' onClick={this.englishHandler}> English</button>
            </td>
          </tr>
          <tr>
            <td>{marathi}{english}</td>
          </tr>
          </table>
          </div>
      </div>
    );
  }
}

export default App;
