// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container-element">
        <h1 className="main-heading">
          The Button has been clicked{' '}
          <span className="spanElement">{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.increaseCount}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
