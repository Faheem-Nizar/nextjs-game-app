import React from "react";
import styles from './sudoku.module.css';
import {isSudokuTrue,
Uactual,
Usquares} from '../../components/statesInSudoku';
import { useRecoilState } from "recoil";
function CheckNumberCompleted() {
    const [isSudoku] = useRecoilState(isSudokuTrue)
    const [actual] = useRecoilState(Uactual);//the user inputed + initially given values
    const [squares] = useRecoilState(Usquares);//the final board 
  
    const checkSudokuStatus = () => {
        let count= 0;
        for( ; count < 9; count++) {
            let count2 = 0;
            let counterForDig = 0;
            for( ; count2 < 81; count2++) {
                if((actual[count2] === (count+1)) &&
                    (actual[count2] === squares[count2])) {
                    counterForDig++;
                }
            }
            if(counterForDig === 9) {
                isSudoku[count] = true;
            }
            else if(counterForDig !== 9) {
                isSudoku[count] = false;
            }
        }
    }
    return (
        <div className={styles.boardRow}>
            {checkSudokuStatus()}
        <div> 
          {
            (isSudoku[0]) && 
            <div className={styles.sudokuResultNumber}>1</div>
          }
        </div>
        <div>
          {
            (isSudoku[1]) && 
            <div className={styles.sudokuResultNumber}>2</div>
          }
        </div>
        <div>
          {
            (isSudoku[2]) && 
            <div className={styles.sudokuResultNumber}>3</div>
          }
        </div>
        <div>
          {
            (isSudoku[3]) && 
            <div className={styles.sudokuResultNumber}>4</div>
          }
        </div>
        <div>
          {
            (isSudoku[4]) && 
            <div className={styles.sudokuResultNumber}>5</div>
          }
        </div>
        <div>
          {
            (isSudoku[5]) && 
            <div className={styles.sudokuResultNumber}>6</div>
          }
        </div>
        <div>
          {
            (isSudoku[6]) && 
            <div className={styles.sudokuResultNumber}>7</div>
          }
        </div>
        <div>
          {
            (isSudoku[7]) && 
            <div className={styles.sudokuResultNumber}>8</div>
          }
        </div>
        <div> 
          {
            (isSudoku[8]) && 
            <div className={styles.sudokuResultNumber}>9</div>
          }
        </div>
      </div>
    )
}
export default CheckNumberCompleted;
