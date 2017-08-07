import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class OnlyEvens extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // change code below this line
    //return nextProps.value % 2 === 0;
		return true;
    // change code above this line
	}
	componentWillReceiveProps(nextProps) {
		console.log('Receiving new props...');
	}
	componentDidUpdate() {
		console.log('Component re-rendered.');
	}
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}
	addValue = () => {
		this.setState({
			value: this.state.value + 1
		});
	}
  render() {
    return (
			<div>
				<button onClick={this.addValue}>Add</button>
				<OnlyEvens value={this.state.value}/>
			</div>
    );
  }
};

class App extends Component {
  render() {
    return ( <div className = "App" >
      <div className = "App-header" >
      <img src = {logo} className = "App-logo" alt = "logo" / >
      <h2 > Welcome to React </h2>
      </div >
      <p className = "App-intro" >
      To get started, edit
      <code> src/App.js
      </code> and save to reload.
      </p >

			<Controller />
    </div>
    );
  }
}


export default App;
