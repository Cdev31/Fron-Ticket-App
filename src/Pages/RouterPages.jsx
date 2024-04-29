import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';

const {  Sider, Content } = Layout;

export const RouterPages = () => {
  
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Ingresar',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Estcritorios',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Tickets',
            },
          ]}
        />
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
