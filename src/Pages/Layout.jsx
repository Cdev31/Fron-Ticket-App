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
      <Sider hidden={false}>
        <div className="demo-logo-vertical" />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
              <Link to="/login">
              Ingresar
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined/>}>
              <Link to="/desk">
              Escritorio
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined/>}>
              <Link to="/ticket">
              Ticket
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
