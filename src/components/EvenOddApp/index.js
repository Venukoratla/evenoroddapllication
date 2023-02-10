// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increase = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + number}))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'
    console.log(value)
    return (
      <div className="full-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {value}</p>
          <button className="button" type="button" onClick={this.increase}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
