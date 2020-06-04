import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app'
import Header from './app';
import IndecisionApp from './app';

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

// class Counter extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state= {
//       count: 0
//     }
//   }

//   handleAddOne = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
  
//   handleMinusOne = () => {
//     this.setState((prevState) => {
//       return{
//         count: prevState.count - 1
//       }
//     })
//   }
  
//   handleReset = () => {
//     this.setState(() => {
//       return {
//         count: 0
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     )
//   }
// }
 
const renderme = () => {
  const template = (
    <div>
      <IndecisionApp />

    </div>
  )
  ReactDOM.render(template, document.getElementById('root'));
}

renderme()
