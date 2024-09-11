import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <h1>React Js</h1>
      <h2>ContextApi</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
