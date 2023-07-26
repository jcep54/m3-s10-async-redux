import React from 'react';
import './App.css';
import Activity from './components/activity';
import { connect } from 'react-redux';
import { getAction } from './actions/activityAction';

function App(props) {
  return (
    <div className="App">
      <h1>Stimuli</h1>
      <p>Let's find something new for you to do</p>
      <button onClick={props.getAction}>Get new activity</button>
      <div><Activity/></div>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    suggestion: state.suggestion
  }
}

export default connect(mapStateToProps,{getAction})(App);