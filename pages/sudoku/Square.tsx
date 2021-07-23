import React from 'react';
import {useRecoilState} from 'recoil';
//import HandleClick from './handleClick';
import {UfillPossibility,
Uactual,
Unumber,
UnextStep,
UcolChange,
Uallow,
} from '../../components/UniversalComponents/statesInSudoku';
import styles from './sudoku.module.css'

function Square(props) {
  const [actual] = useRecoilState(Uactual);//the user inputed + initially given values
  const [fillPossibility] = useRecoilState(UfillPossibility);// identifying all empty spots 
  const [number] = useRecoilState(Unumber);
  const [colChange] = useRecoilState(UcolChange);
  const [, setAllow] = useRecoilState(Uallow);
  const [nextStep, setNextStep] = useRecoilState(UnextStep);
  const [actSq] = useRecoilState(Uactual);
  const handleAClick = (i) => {
    if(nextStep === 0 && number !== 0 && fillPossibility[i] === 0) {
      actual[i] = number;
      setNextStep(1);  
      let colc = colChange;
      document.getElementById(colc).style.backgroundColor='#eee';
      setAllow(1);   
    }
  }

  const check = () => {
    if(fillPossibility[props.in] === 0) {
      return false;
    }
    else {
      return true;
    }
  }
  
  return (
    <div>
    <button className={styles.sudokuSquare} onClick={() => {handleAClick(props.in);}}>
      { check() && <div className={styles.fixedNumbers}>{actSq[props.in]}</div> }
      { !(check()) && <div>{actSq[props.in]}</div> }        
    </button>
    </div>
  );
} 
export default Square;
