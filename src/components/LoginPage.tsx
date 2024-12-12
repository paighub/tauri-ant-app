import { useState } from 'react';
import { Input, Button, message, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginPage.css';

import { getCurrentWindow } from "@tauri-apps/api/window";

import { useAuth } from '../context/AuthContext.tsx'
import { useVersion } from '../context/VersionContext';

const LoginPage = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { version } = useVersion();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        message.info('Logging in...' + username + password);
        // todo check username and password

        login();
        message.success('Login successful!');
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
                    Version: {version}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;