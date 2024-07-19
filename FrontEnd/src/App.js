import './App.css';
import LoginPage from './Components/LoginPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PasswordChange from './Components/PasswordChange';
import Layout from './Components/Layout';
import LoginSuccess from './Components/LoginSuccess';
import './App.css';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="change" element={<PasswordChange />} />
            <Route path="next" element={<LoginSuccess />} />
            <Route path="*" element={<LoginPage />} />
          </Route>
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
