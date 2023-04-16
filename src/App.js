import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <main className='column'>
      <h1>Auth0 Login</h1>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>

    </main>
    
  );
}

export default App;
