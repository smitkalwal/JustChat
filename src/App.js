import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './components/chat';
import HomePage from './components/home';
import SignInPage from './components/signin';
import SignUpPage from './components/signup';

import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket'] });
const socket = socketIO.connect('https://just-chat-backend.vercel.app', { transports: ['websocket', 'polling', 'flashsocket'] });

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
