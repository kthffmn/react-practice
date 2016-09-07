import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    this.setState({m: 2})
  }
  render(){
    console.log("rendering")
    return (
      <div className="padding">
        <button onClick={this.update} className="btn btn-default btn-lg">{this.state.val}</button>
      </div>
    );
  }
  componentDidMount() {
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount() {
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
    mount(){
      ReactDOM.render(<App />, document.getElementById('a'))
    }
    unmount(){
      ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
      return (
        <div>
          <div className="btn-group">
            <button onClick={this.mount.bind(this)} className="btn btn-default">Mount</button>
            <button onClick={this.unmount.bind(this)} className="btn btn-default">Unmount</button>
          </div>
          <div id="a">
          </div>
        </div>
      );
    }
}

export default Wrapper
