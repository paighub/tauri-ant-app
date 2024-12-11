import React, { useState } from 'react';
import { Layout, Menu, message, Typography, Divider } from 'antd';
import {
  CompressOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import DevicesPage from './DevicesPage'; // 导入 DevicesPage 组件
import DataPage from './DataPage';
import SettingPage from './SettingPage';
import { Footer } from 'antd/es/layout/layout';

const { Header, Sider, Content } = Layout;
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

  return (<Layout style={{ minHeight: '100vh' }}>
    <Sider width={200} >
      <div style={{ backgroundColor: '#f6f6f6' }}>
        <img src="/tauri.svg" alt="Logo" style={{ width: '60px', display: 'block', margin: 'auto' }} />
      </div>

      <Menu mode="vertical" theme="light" defaultSelectedKeys={['devices']} onClick={handleMenuClick} style={{ height: '100%', fontSize: '20px' }}>
        <Menu.Item key="devices" icon={<CompressOutlined />}>
          Devices
        </Menu.Item>
        <Menu.Item key="data" icon={<AppstoreOutlined />}>
          Data
        </Menu.Item>
        <Divider type="horizontal" style={{ margin: '8px 0' }} />
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Setting
        </Menu.Item>
        <Divider type="horizontal" style={{ margin: '8px 0' }} />
        <Menu.Item key="exit" icon={<LogoutOutlined />} style={{ position: 'absolute', bottom: 0 }}>
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
  </Layout>
  );
};

export default HomePage;