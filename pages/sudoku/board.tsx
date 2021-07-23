import React from 'react';
import Square from './Square';
import styles from './sudoku.module.css'

function RenderSquare(i) {
  return (
    <Square
      in = {i}
      
    />
  );
}
function Board() {
 
  return (
    <div>
      <div className={styles.boardRow}>  
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(9)}
        {RenderSquare(10)}
        {RenderSquare(11)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(18)}
        {RenderSquare(19)}
        {RenderSquare(20)}
        </div>
      </div>
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(12)}
        {RenderSquare(13)}
        {RenderSquare(14)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(21)}
        {RenderSquare(22)}
        {RenderSquare(23)}
        </div>      
      </div>
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(15)}
        {RenderSquare(16)}
        {RenderSquare(17)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(24)}
        {RenderSquare(25)}
        {RenderSquare(26)}
        </div>
      </div>
      </div>
      <div className={styles.boardRow}>  
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(27)}
        {RenderSquare(28)}
        {RenderSquare(29)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(36)}
        {RenderSquare(37)}
        {RenderSquare(38)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(45)}
        {RenderSquare(46)}
        {RenderSquare(47)}
        </div>
      </div>
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(30)}
        {RenderSquare(31)}
        {RenderSquare(32)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(39)}
        {RenderSquare(40)}
        {RenderSquare(41)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(48)}
        {RenderSquare(49)}
        {RenderSquare(50)}
        </div>      
      </div>
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(33)}
        {RenderSquare(34)}
        {RenderSquare(35)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(42)}
        {RenderSquare(43)}
        {RenderSquare(44)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(51)}
        {RenderSquare(52)}
        {RenderSquare(53)}
        </div>
      </div>
      </div>
      <div className={styles.boardRow}>  
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(54)}
        {RenderSquare(55)}
        {RenderSquare(56)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(63)}
        {RenderSquare(64)}
        {RenderSquare(65)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(72)}
        {RenderSquare(73)}
        {RenderSquare(74)}
        </div>
      </div>
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(57)}
        {RenderSquare(58)}
        {RenderSquare(59)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(66)}
        {RenderSquare(67)}
        {RenderSquare(68)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(75)}
        {RenderSquare(76)}
        {RenderSquare(77)}
        </div>      
      </div>
      <div className={styles.sudokuBox}>
        <div className={styles.boardRow}>
        {RenderSquare(60)}
        {RenderSquare(61)}
        {RenderSquare(62)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(69)}
        {RenderSquare(70)}
        {RenderSquare(71)}
        </div>
        <div className={styles.boardRow}>
        {RenderSquare(78)}
        {RenderSquare(79)}
        {RenderSquare(80)}
        </div>
      </div>
      </div>
    </div>
  );
}
  
  export default Board;
