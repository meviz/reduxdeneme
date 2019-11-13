import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo} from './actions/index';

class App extends Component {

  handleClick(){
    this.props.addTodo("Muhammed Eviz")
    console.log(this.props);
  }

  handleClick2(){
    this.props.addTodo("Ahmed Eviz")
    console.log(this.props);
  }
  render (){
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.handleClick.bind(this)}>ME</button>
        <button onClick={this.handleClick2.bind(this) }>AE</button>
      </div>
    )
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  text: state.text,
});


 


 

export default connect(mapStateToProps,{addTodo})(App);
