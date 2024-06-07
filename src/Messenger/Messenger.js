import { Component } from "react";

class Messenger extends Component {
    state = {
        count: 0
    }

    incrimentFunc = () => {
        if (this.state.count<=4){
            this.setState({ count: this.state.count + 1 },()=>{
                this.props.mycallback(this.state.count)
            })
            }
    }
    decrimentFunc = () => {
        if(this.state.count>0){
            this.setState({ count: this.state.count - 1 },()=>{
                this.props.mycallback(this.state.count)
            })
        }
    }

    render() {
        const {count}=this.state
        return (
            <div>
                <text>message Component count = {count} {this.props.name}</text>
                <button onClick={this.incrimentFunc}>Incriment</button>
                <button onClick={this.decrimentFunc}>Decriment</button>
            </div>
        );
    }
}

export default Messenger;