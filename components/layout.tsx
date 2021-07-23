import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import Link from 'next/link'

const { Header, Content, Footer } = Layout;
export default function PageLayout({ children }) {
    return (
        <div>
            <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="2"><Link href="/"><a> Home</a></Link> </Menu.Item>
      <Menu.Item key="3"><Link href="/tictactoe/StartGame"><a> TicTacToe</a></Link> </Menu.Item>
      <Menu.Item key="1"><Link href="/sudoku/sudokuStartPage"><a> Sudoku</a></Link> </Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      
      <div className="site-layout-background" style={{ padding: 24, minHeight: 619 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> App by Faheem Nizar ©2021 </Footer>
  </Layout>
        </div>

    )
  }