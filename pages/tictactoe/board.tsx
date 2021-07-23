import React from 'react';
import styles from './tictactoe.module.css'
function Square(props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}        
    </button>
  );
} 
  
function renderSquare(i, props) {
  return (
    <Square
      value = {props.squares[i]}
      onClick={() => props.onClick(i)}
    />
  );
}
function Board(props) {
  return (
    <div>
      <div className={styles.boardRowTic}>
        {renderSquare(0, props)}
        {renderSquare(1, props)}
        {renderSquare(2, props)}
      </div>
      <div className={styles.boardRowTic}>
        {renderSquare(3, props)}
        {renderSquare(4, props)}
        {renderSquare(5, props)}
      </div>
      <div className={styles.boardRowTic}>
        {renderSquare(6, props)}
        {renderSquare(7, props)}
        {renderSquare(8, props)}
      </div>
    </div>
  );
}
  
  export default Board;