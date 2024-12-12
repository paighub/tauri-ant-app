import { useEffect } from "react";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { useAuth } from "./context/AuthContext";
import { getCurrentWindow } from "@tauri-apps/api/window";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth();  // 获取登录状态

  useEffect(() => {
    // 生产环境, 全局取消右键菜单
    // Production environment, cancel right-click menu
    if (!import.meta.env.DEV) {
      document.oncontextmenu = (event) => {
        event.preventDefault()
      }
    }

    const setFullscreen = async () => {
      const appWindow = getCurrentWindow();
      await appWindow.setFullscreen(true);
    };

    setFullscreen();
  }, []); // 空数组作为依赖项，确保只在组件挂载时运行一次


  // 打开登录页面，登录成功后跳转到首页
  return (
    <div>
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
