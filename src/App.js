import { Component } from 'react';
import './App.css';
import Messenger from './Messenger/Messenger';

class Page extends Component {
  state={
    myvalue:0,
    name:'rohit'
  }
  callbackFunction = (value) => {
    this.setState({myvalue:value})
    console.log(value)
  }
  render() {
    return (
      <div>
        <h1>hello uma {this.state.myvalue}</h1>
        <Messenger name={this.state.name} mycallback={this.callbackFunction} />
      </div>
    )
  }

}

export default Page;
