
import React from'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button> 
    )
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value = {i}/>
}


render() {
  const status = 'Следующий игрок 0'

  return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}

        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
        </div>
        <div className="board-row">
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
        </div>
        <div className="board-row">
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
        <div className="board-row">
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
        </div>
        <div className="board-row">
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
        </div>
      </div>
    )
  }
}


class Game extends React.Component{
  render() {
    return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>

        <div className="game-info">
        <div></div>
        <ol></ol>
        </div>

    </div>
    )
  }
}


export default Game
