import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo} from './actions/index';

class App extends Component {
  handleClick(){
    this.props.addTodo("Muhammed Eviz")
  }

  handleClick2(){
    this.props.addTodo("Ahmed Eviz")
  }
  
  render (){
    return (
      <div>
        <h1>{this.props.text}</h1>{/*It has to be change when I click the buttons. */}
        <button onClick={this.handleClick.bind(this)}>ME</button>
        <button onClick={this.handleClick2.bind(this)}>AE</button>
      </div>
    )
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  text: state.text,
});

const mapDispatchToProps = {
  addTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
