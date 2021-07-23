import React from 'react';
import Board from './board';
//import StartGame from './InitialiseValues';
import {
  useRecoilState 
} from 'recoil';
import Link from 'next/link'
import PageLayout from '../../components/layout';
import styles from './sudoku.module.css'
import {Uactual,
Usquares,
Unumber,
UnextStep,
Ustatus,
UcolChange,
Uallow} from './UniversalComponents/statesInSudoku';
import 'antd/dist/antd.css';
import CheckNumberCompleted from './confirmSudokuNumbers';

function Game() {
  const [actual] = useRecoilState(Uactual);//the user inputed + initially given values
  const [squares] = useRecoilState(Usquares);//the final board 
  const [, setNumber] = useRecoilState(Unumber);
  const [, setNextStep] = useRecoilState(UnextStep);
  const [status] = useRecoilState(Ustatus);
  const [colChange, setColChange] = useRecoilState(UcolChange);
  const [allow, setAllow] = useRecoilState(Uallow);
  let flag = 0;
    for(let i = 0; i<81; i++) {
      if(squares[i] !== actual[i]) {
        flag ++;
      }
    }
    if(flag === 0) {
      status[0] = 1;
      flag = 1;
    }
    else{
      status[0] = 0;
    }
   
  const changeColor = (i) => {
    let colChangePrev = 'btn' + i;
    document.getElementById(colChangePrev).style.backgroundColor='#aaa';
    if(allow === 0 && (colChange !== colChangePrev)) {
      document.getElementById(colChange).style.backgroundColor='#eee';
    }
    setAllow(0);
    setColChange(colChangePrev);
  } 
  return (
   
    <PageLayout>
    <div className={styles.CentreingContainer}> 
      <button id="btnc" > </button>
      
      <div className={styles.game}>
          <Board/>
        <div className={styles.gameInfo}>
          
          <div className={styles.boardRow}>
            <button id="btn1" className={styles.sudokuNumber} onClick={() => {setNumber(1); setNextStep(0); changeColor(1)}}>1</button>
            <button id="btn2" className={styles.sudokuNumber} onClick={() => {setNumber(2); setNextStep(0); changeColor(2)}}>2</button>
            <button id="btn3" className={styles.sudokuNumber} onClick={() => {setNumber(3); setNextStep(0); changeColor(3)}}>3</button>
          </div>
          <div className={styles.boardRow}>  
            <button id="btn4" className={styles.sudokuNumber} onClick={() => {setNumber(4); setNextStep(0); changeColor(4)}}>4</button>
            <button id="btn5" className={styles.sudokuNumber} onClick={() => {setNumber(5); setNextStep(0); changeColor(5)}}>5</button>
            <button id="btn6" className={styles.sudokuNumber} onClick={() => {setNumber(6); setNextStep(0); changeColor(6)}}>6</button>
          </div> 
          <div className={styles.boardRow}> 
            <button id="btn7" className={styles.sudokuNumber} onClick={() => {setNumber(7); setNextStep(0); changeColor(7)}}>7</button>
            <button id="btn8" className={styles.sudokuNumber} onClick={() => {setNumber(8); setNextStep(0); changeColor(8)}}>8</button>
            <button id="btn9" className={styles.sudokuNumber} onClick={() => {setNumber(9); setNextStep(0); changeColor(9)}}>9</button>
          </div>
          <div className={styles.boardRow}>  
            <button id="btn10" className={styles.sudokuClear} onClick={() => {setNumber(null); setNextStep(0); changeColor(10)}}>clear</button>
          </div>
          <button ><Link href="/sudoku/resultsPage">CHECK RESULTS</Link></button> 
          
        </div>
      </div>
      <div> <h2> Completed Numbers </h2> </div>
      <CheckNumberCompleted />
    </div>
  </PageLayout>
 
  );    
}

export default Game;
