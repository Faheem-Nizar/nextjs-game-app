import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import styles from './frontpage.module.css' 
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '130px',
    textAlign: 'center',
    background: '#f44',
  };
export default function Homepage() {
    return (
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle} >
        <div className={styles.frontPage}>
          
            WELCOME TO THE GAME SHACK
          
        </div>
      </h3>
    </div>
   <div>
      <h3 style={contentStyle}>
        <div className={styles.frontPage}>
          
            DIZZY YOUR BRAIN WITH SUDOKU
          
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <div className={styles.frontPage}>
          
            COMPETE WITH YOUR FRIENDS IN TIC TAC TOE
          
        </div>  
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <div className={styles.frontPage}>
          
            WHAT ARE YOU WAITING FOR? GET STARTED
          
        </div>
      </h3>
    </div>
  </Carousel>
    )
}