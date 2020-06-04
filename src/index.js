import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app'
import Header from './app';
import IndecisionApp from './app';
import Counter from './Counter'

class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      visibility: true
    }
  }

  toggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>Click Me</button>
        <p>
          {!this.state.visibility && 'Here I Am'}
          {this.state.visibility && ''}
        </p>
      </div>
    )
  }
}

 
const renderme = () => {
  const template = (
    <div>
      <Counter />
      <IndecisionApp />
    </div>
  )
  ReactDOM.render(template, document.getElementById('root'));
}

renderme()
