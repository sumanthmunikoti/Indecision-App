import React from 'react'

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      options: []
    }
  }

  componentDidMount() {

    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      //Nothin
    }
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      // console.log(json)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randNum]
    console.log(option)
  }

  handleDeleteOptions = () => {this.setState(() => ({options: []}))}

  handleDeleteOption = (option) => {this.setState((prevState) => {
    return {
      options: prevState.options.filter((opt) => opt !== option)
    }
  })}

  handleAddOption = (option) => {

    if (!option) {
      return 'Please enter a valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!'
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }

  render() {

    const subtitle = 'Go Supersaiyan!'

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0} />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
      
    )
  }

}

// IndecisionApp.defaultProps = {
//   options : []
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>No options to display</p>}
      {
        props.options.map((option) => 
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}/>
        )
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
        <button 
        onClick={() => {
          props.handleDeleteOption(props.optionText)
        }}>
          Delete
        </button>
    </div>
  );
}

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
      <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
  )
}

class AddOption extends React.Component {

  state = {
    error: undefined
  }

  handleAddOption = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({ error }))

    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }

}

export default IndecisionApp