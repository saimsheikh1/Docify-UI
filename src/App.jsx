import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Chat from './pages/Chat'; // New route to the Chat page
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Default route: Home Page */}
        <Route path="/signup" element={<SignupPage />} />  {/* Signup page route */}
        <Route path="/login" element={<LoginPage />} />  {/* Login page route */}
        <Route path="/chat" element={<Chat />} /> {/* Chat page route */}
      </Routes>
    </Router>
  );
}

export default App;