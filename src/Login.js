import React,{Component} from 'react';
import PropTypes from 


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
         name: 'Tushar',
         age: ''
        }
      
      }
     
      
     
    render(){
        return(
            <div>
            <label >
            Name :{this.state.name}
              </label>
            </div>
        )
    }
   
}