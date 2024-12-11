// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// 定义认证上下文的接口
interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// 创建上下文
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// 创建上下文提供者组件
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 定义一个自定义 hook 用于方便地使用 AuthContext
export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
