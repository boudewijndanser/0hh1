// src/reducers/board.test.js

import board from './board'

describe('board reducer', () => {
  const reducer = board
  const initialState = [
    [ 0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0 ],
    [ 0,0,0,0,0,0 ]
  ]

  it('Returns an array filled with 6 arrays with zeros initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
