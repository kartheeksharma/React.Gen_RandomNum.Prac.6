// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  onGenRandomNum = () => {
    const newRandomNum = Math.ceil(Math.random() * 100)

    this.setState({randomNum: newRandomNum})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="app-cont">
        <div className="random-num-gen-cont">
          <h1 className="heading"> Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="btn-random-gen"
            onClick={this.onGenRandomNum}
          >
            Generate
          </button>
          <p className="random-num"> {randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
