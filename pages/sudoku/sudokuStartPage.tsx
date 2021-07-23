import React from 'react';
import { useRecoilState } from 'recoil';
import {easy,
easyFill,
med,
medFill,
hard,
hardFill} from '../../components/UniversalComponents/difficultyLevels';
import Link from 'next/link'
import {Usquares,
UfillPossibility,
Uactual,
UcolChange} from '../../components/UniversalComponents/statesInSudoku';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import PageLayout from '../../components/layout'; 
import styles from './sudoku.module.css'


  const { Header, Content, Footer } = Layout

function AssignDifficulty () {
    const [arrEasy] = useRecoilState(easy);
    const [arrFillEasy] = useRecoilState(easyFill);
    const [arrMed] = useRecoilState(med);
    const [arrFillMed] = useRecoilState(medFill);
    const [arrHard] = useRecoilState(hard);
    const [arrFillHard] = useRecoilState(hardFill);
    

  const [, setSquares] = useRecoilState(Usquares);//the final board
  const [, setFillPossibility] = useRecoilState(UfillPossibility);// identifying all empty spots
  const [actual] = useRecoilState(Uactual);
  const [colChange, setColChange] = useRecoilState(UcolChange);


  const changeColor = (i) => {
    let colChangePrev = 'btn' + i;
    document.getElementById(colChangePrev).style.backgroundColor='#aaa';
    if((colChange !== colChangePrev) && (colChange === 'btnc' || colChange === 'btn1' || colChange === 'btn2' || colChange === 'btn3')) {
      document.getElementById(colChange).style.backgroundColor='#eee';
    }
    setColChange(colChangePrev);
  } 
  
  const startGame = (i) => {
    if(i === 1) {      
      setFillPossibility(arrFillEasy);
      setSquares(arrEasy);
      for(let i = 0; i<81; i++) {
        if(arrFillEasy[i] !== 0) {
          actual[i] = arrEasy[i];
        }
        else{
            actual[i] = null;
        }
      }
    }
    else if(i === 2) {
      setFillPossibility(arrFillMed);
      setSquares(arrMed);
      for(let i = 0; i<81; i++) {
        if(arrFillMed[i] !== 0) {
          actual[i] = arrMed[i];
        }
        else{
            actual[i] = null;
        }
      }
    }
    else if(i === 3) {
      setFillPossibility(arrFillHard);
      setSquares(arrHard);
      for(let i = 0; i<81; i++) {
        if(arrFillHard[i] !== 0) {
          actual[i] = arrHard[i];
        }
        else{
            actual[i] = null;
        }
      } 
    }
  }

    return (
      <PageLayout>
      
      <div className={styles.CentreingContainer}>
            <button id="btn1" className={styles.SelectDifficulty} onClick = { () => {startGame(1); changeColor(1)}}>EASY</button>
            <button id="btn2" className={styles.SelectDifficulty} onClick = { () => {startGame(2); changeColor(2)}}>MEDIUM</button>
            <button id="btn3" className={styles.SelectDifficulty} onClick = { () => {startGame(3); changeColor(3)}}>HARD</button>
            <button id="btnc" className={styles.SelectDifficulty} > 
            <Link href="/sudoku/game">Play Sudoku</Link> 
            </button>
        </div>
       
      </PageLayout> 
    )
}
export default AssignDifficulty;
