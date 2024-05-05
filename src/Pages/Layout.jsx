import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'

import { Layout, Menu, theme } from 'antd';

const {  Sider, Content } = Layout;

export const LayoutApp = ({ children }) => {
   
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider hidden={false} collapsedWidth="0" breakpoint='md'>
        <div className="demo-logo-vertical" />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
              <Link to="/auth/login">
              Ingresar
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined/>}>
              <Link to="/home/desk">
              Escritorio
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined/>}>
              <Link to="/client/create-ticket">
              Crear Ticket
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraOutlined/>}>
              <Link to="/client/queue">
              Cola ticktets
              </Link>
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
     
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        { children }
      </Content>
    </Layout>
  </Layout>
  );
};
