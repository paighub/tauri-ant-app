// LoginPage.tsx
import { ReactDOM, useState } from 'react';
import { Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'; // 导入图标组件
import { useAuth } from '../context/AuthContext.tsx'
import './LoginPage.css'; // 引入样式文件

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
        // todo check username and password

        login();
        message.success('Login successful!');
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
                <Button type="primary" block onClick={handleLogin}>
                    Login
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;