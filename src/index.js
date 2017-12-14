import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
class Home extends Component{

  render(){
    return(
<div className="container">
<App/>
</div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

