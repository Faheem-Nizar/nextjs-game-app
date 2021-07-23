import React, {useState} from 'react';
import Board from './board';
import findWinner from './fnc_findWinner';
import { useRecoilState } from 'recoil';
import {P1Name,
P2Name} from './StartGame';
import 'antd/dist/antd.css';
import styles from './tictactoe.module.css'
import PageLayout from '../../components/layout';
 
let num = 0;

function TicTacToeGame(props) {
   const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
      }]);
      const [stepNumber, setStepNumber] = useState(0);
    
  const [u1Data] = useRecoilState(P1Name);
  const [u2Data] = useRecoilState(P2Name);

  const handleClick = (i) => {
    const history1 = history.slice(0, stepNumber + 1);
    const current = history1[history1.length - 1];
    const squares = current.squares.slice();
    if(findWinner(squares) === null && squares[i] === null){
      num = num + 1;
      if(num%2 === 1)
        squares[i] = 'X';
      else
        squares[i] = 'O';  
      
        setHistory(history1.concat([{
          squares: squares
        }]));
        setStepNumber(history1.length);
          
    }
  }
  const jumpTo = (step) => {
    if(step >= 0){
      setStepNumber(step);
    num = step ;
    }
  }
    const current = history[stepNumber];
    const winner =findWinner(current.squares);

    const moves = history.map(()=>{
      return (
        null
      );
    });

    let playerID;
    if(num%2 === 0)
      playerID = u1Data;
    else  playerID = u2Data;
    let status;
    let winnerName;
    let statusAlert;
    if(winner === 'X')
      winnerName = u1Data;
    else  winnerName = u2Data;
    if(winner!== null) {
      status = 'WINNER IS: ' + winnerName;
      statusAlert = winnerName + ' Has Won !!!';
    }
    else
      status = 'Next player: ' + playerID;
    if(num >=9 && winner === null)
      status = 'DRAW';
      //var squ = current.squares;
    return (

      <div>
    <PageLayout>
    
     <div className={styles.game}>
        
          <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          />
        
        <div className={styles.gameinfo}>
          <div> {u1Data} plays X</div>
          <div> {u2Data} plays O</div>
          <div className = {styles.stats}>{status}</div>
          
          <ol>{moves}</ol>
          <div><button onClick={() => {
            jumpTo(num-1);
            }}>
              <img src="/backImg.jpeg" height="50" width="50" alt="back"/>
              </button></div>
          <div className={styles.winneralert}>{statusAlert}</div>
        </div>
      </div>
    
    </PageLayout>
  </div>
    );
  
}

export default TicTacToeGame;
/*<li key={move}>
          {descrip}
          <button onClick={() => {
            jumpTo(move);
            
            }}>{desc}</button>
        </li>*/
