import React from 'react';
import { useRecoilState } from 'recoil';
import {Ustatus} from '../../components/statesInSudoku';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
import Link from 'next/link'
import PageLayout from '../../components/layout';


function Results() {
  const [status] = useRecoilState(Ustatus);
  if(status[0] === 1) {
    return (
      <PageLayout>
        <Result
          status="success"
          title="CONGRATS"
          subTitle="Great work. You completed the level successfully ! yay !"
          extra={[
            <Button type="primary" key="console">
              <Link href="/sudoku/sudokuStartPage">Play Again</Link>
            </Button>,
            <Button key="buy"><Link href="/">Go To Homepage</Link></Button>,
          ]}
        />
      </PageLayout>
    )
  }
  else if(status[0] === 0){
    return(
      <PageLayout>
        <Result
          status="error"
          title="TRY AGAIN"
          subTitle="Looks like you might have filled a few boxes incorrectly. Do try again. "
          extra={[
            <Button type="primary" key="console">
              <Link href="/sudoku/sudokuStartPage">Play Again</Link>
            </Button>,
            <Button key="buy"><Link href="/">Go To Homepage</Link></Button>,
          ]}
        />
      </PageLayout>            
    )
  }
}
export default Results;
