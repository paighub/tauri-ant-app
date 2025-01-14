import { useState } from 'react';
import { Input, Button, message, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginPage.css';

import { getCurrentWindow } from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api/core";

import FooterPage from './FooterPage';

import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        message.info('Logging in...' + username + password);
        invoke<boolean>('login', { user: username, password: password })
            .then((res) => {
                if (res) {
                    login();
                    message.success('Login successful!');
                } else {
                    message.error('Login failed!');
                }
            })
            .catch((err) => {
                console.error('Failed to fetch version:', err);
            });
    };

    const handleExit = async () => {
        getCurrentWindow().close();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo">
                    <img src="/tauri.svg" alt="Logo" />
                </div>
                <Input
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username" className="input-field"
                    value={username}
                    onChange={handleUsernameChange} />
                <Input.Password
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Password" className="input-field"
                    value={password}
                    onChange={handlePasswordChange} />
                <Space>
                    <Button type="primary" block onClick={handleLogin}>
                        Login
                    </Button>
                    <Button block onClick={handleExit}>
                        Exit
                    </Button>
                </Space>
                <div style={{ marginTop: 20, fontSize: 14, color: '#888' }}>
                    <FooterPage />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;