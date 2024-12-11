
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();  // 获取登录状态

  // 打开登录页面，登录成功后跳转到首页
  return (
    <div>
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
