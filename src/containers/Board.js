// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import ReactDOM from 'react-dom';
import Square from '../components/Square'
import './Board.css'
import { connect } from 'react-redux'

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }

  renderRow = (row, index) => {
    return (
      <div key={index} className="row">
        {row.map(this.renderSquare(index))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    return (
      <Square key={index} value={value} />
    )
  }

  render() {
    return (
      <div className="Board">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}
// src/containers/Board.js

// At the bottom of the file, where you connect your component:
const mapStateToProps = (reduxState) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    board: reduxState.board
  }
}

// Then pass it to connect:
export default connect(mapStateToProps)(Board)
// Build a Board and Square component using the code above.
// Don't worry about styling yet, and the fact that it does not have board squares to render yet.
// Just build it the way you think it should work.
