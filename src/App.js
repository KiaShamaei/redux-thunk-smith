import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as action from "./store/action/actionCreators"
import logo from "./logo.svg"

class App extends Component {
	
  render() {
	console.log(this.props.loading)
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
		{this.props.loading && <img src={logo} className="App-logo"/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age ,
	loading : state.loading
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(action.ageUp(1)),
    onAgeDown: () => dispatch(action.ageDown(1))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
