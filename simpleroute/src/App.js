import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mypage">MyPage</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      {/* 주소 경로와 아까 만든 3개의 컴포넌트를 연결해 줍니다. */}
       {/* Routes 컴포넌트는 Route 컴포넌트들을 감싸고 있어야 합니다. */}
       <Routes>
          {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route path="/" element={<Home />} /> 
          <Route path="/mypage" element={<MyPage />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
)
}


// Home 컴포넌트
function Home() {
  return <h1>Home</h1>;
}

// MyPage 컴포넌트
function MyPage() {
  return <h1>MyPage</h1>;
}

// Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default App;
