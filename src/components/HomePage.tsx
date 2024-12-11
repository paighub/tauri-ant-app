// HomePage.tsx
import React, { useState } from 'react';
import { Layout, Menu, Modal, Button, Typography } from 'antd';
import { UserOutlined, DatabaseOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import './HomePage.css'; // 引入样式文件
import DevicesPage from './DevicesPage'; // 导入 DevicesPage 组件
import DataPage from './DataPage';
import SettingPage from './SettingPage';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const HomePage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('devices');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMenuClick = (e: any) => {
    if (e.key === 'logout') {
      setIsModalVisible(true);
    } else {
      setCurrent(e.key);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // 这里可以添加退出逻辑，例如清除 token 或重定向到登录页面
    window.location.href = '/login';
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderContent = () => {
    switch (current) {
      case 'devices':
        return <DevicesPage />; // 使用 DevicesPage 组件
      case 'data':
        return <DataPage />;
      case 'settings':
        return <SettingPage />;
      default:
        return <DevicesPage />; // 默认情况下也显示 DevicesPage
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['devices']} mode="inline" onClick={handleMenuClick}>
          <Menu.Item key="devices" icon={<UserOutlined />}>
            Devices
          </Menu.Item>
          <Menu.Item key="data" icon={<DatabaseOutlined />}>
            Data
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
        <Menu theme="dark" mode="inline" className="logout-menu">
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleMenuClick}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Title level={3}>{current.charAt(0).toUpperCase() + current.slice(1)}</Title>
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} />
      </Layout>
      <Modal title="Confirm Logout" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Are you sure you want to log out?
      </Modal>
    </Layout>
  );
};

export default HomePage;
