import React, { useState } from 'react';
import {
  DesktopOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Menu, message, Layout, Typography, Divider } from 'antd';

import DevicesPage from './DevicesPage';
import DataPage from './DataPage';
import SettingPage from './SettingPage';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const HomePage: React.FC = () => {
  const [current, setCurrent] = useState('devices');

  const handleMenuClick = (e: any) => {
    if (e.key === 'exit') {
      message.warning("exit todo action");
      return;
    }

    setCurrent(e.key);
  };

  const renderContent = () => {
    switch (current) {
      case 'devices':
        return <DevicesPage />;
      case 'data':
        return <DataPage />;
      case 'settings':
        return <SettingPage />;
      default:
        return <DevicesPage />;
    }
  };

  return (<Layout style={{ height: '96vh' }}>
    <Sider style={{ backgroundColor: '#f6f6f6', }}>
      <img src="/tauri.svg" alt="Logo" style={{ height: '60px', display: 'block', margin: '10px auto' }} />
      <Menu mode="vertical" defaultSelectedKeys={['devices']} onClick={handleMenuClick}
        theme="light" style={{ fontSize: '20px' }}
      >
        <Menu.Item key="devices" icon={<DesktopOutlined style={{ fontSize: '20px' }} />}>
          Devices
        </Menu.Item>
        <Menu.Item key="data" icon={<AppstoreOutlined style={{ fontSize: '20px' }} />}>
          Data
        </Menu.Item>
        <Divider type="horizontal" style={{ margin: '8px 0' }} />
        <Menu.Item key="settings" icon={<SettingOutlined style={{ fontSize: '20px' }} />}>
          Setting
        </Menu.Item>
        <Menu.Item key="exit" icon={<LogoutOutlined style={{ fontSize: '20px', color: 'red' }} />} style={{ position: 'absolute', bottom: '1vh' }}>
          Exit
        </Menu.Item>
      </Menu>
    </Sider>

    <Layout>
      <Header style={{ padding: '10px 24px', background: '#fff' }}>
        <Title level={3} style={{ margin: 0 }}>
          Title
        </Title>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff' }}>
          {renderContent()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2024 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>);
};

export default HomePage;
