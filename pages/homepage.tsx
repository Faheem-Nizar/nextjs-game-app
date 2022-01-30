import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import styles from './frontpage.module.css' 

export default function Homepage() {
    return (
        <Carousel autoplay>
    <div>
      <h3 className={styles.contentStyle} >
        <div className={styles.frontPage}>
          
            WELCOME TO THE GAME STORE
          
        </div>
      </h3>
    </div>
   <div>
      <h3 className={styles.contentStyle}>
        <div className={styles.frontPage}>
          
            DIZZY YOUR BRAIN WITH SUDOKU
          
        </div>
      </h3>
    </div>
    <div>
      <h3 className={styles.contentStyle}>
        <div className={styles.frontPage}>
          
            COMPETE WITH YOUR FRIENDS IN TIC TAC TOE
          
        </div>  
      </h3>
    </div>
    <div>
      <h3 className={styles.contentStyle}>
        <div className={styles.frontPage}>
          
            WHAT ARE YOU WAITING FOR? GET STARTED
          
        </div>
      </h3>
    </div>
  </Carousel>
    )
}
