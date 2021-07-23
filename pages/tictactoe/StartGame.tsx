import React from 'react';
//import TicTacToeGame from './game';
import Link from 'next/link'
import {useRecoilState, atom} from 'recoil';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Layout, Menu } from 'antd';
import PageLayout from '../../components/layout';


export const P1Name = atom ({
    key: "player-1",
    default: null,
})
export const P2Name = atom ({
    key: "player-2",
    default: null,
})
 const UsubmitTicTacToe = atom ({
  key: "submit-in-ttt",
  default: false,
})

const { Header, Content, Footer } = Layout;



const PlayGame = () => {

  const [, setP1Name] = useRecoilState(P1Name);
  const [, setP2Name] = useRecoilState(P2Name);
  const [submitSuccess, setSubmitSuccess] = useRecoilState(UsubmitTicTacToe)

  let p1, p2;

  const onFinish = (values) => {
    p1 = values.player1;
    p2 = values.player2;

  }
  console.log(p1,p2);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <PageLayout>
    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Player 1"
        name="player1"
        rules={[
          {
            required: true,
            message: 'Please input first player\'s name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Player 2"
        name="player2"
        rules={[
          {
            required: true,
            message: 'Please input second player\'s name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
      <div>
        <Button 
          type="primary" 
          htmlType="submit" 
          onClick={() => {
            setP1Name(p1);
            setP2Name(p2);
            if(p1 !== undefined && p2 !== undefined) {
              setSubmitSuccess(true);
            }  
          }}
        >
          Submit
        </Button>
        <p>double click</p>
      </div>
      <div>
        { submitSuccess && <div>
        <Button 
          type="primary" 
          htmlType="submit" 
          onClick={() => {
            setP1Name(p1);
            setP2Name(p2);
            setSubmitSuccess(false)
          }}
        >
          <Link href="/tictactoe/game"><a>Click To START GAME</a></Link>
        </Button>
     </div>
    }
     </div>
      </Form.Item>
    </Form>
   </PageLayout>
  );
};


export default PlayGame;