import UserContexProvider from './context/userProviderContext'
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <UserContexProvider>
      <h1>React Js</h1>
      <h2>ContextApi</h2>
      <Login/>
      <Profile/>
    </UserContexProvider>
  )
}

export default App
