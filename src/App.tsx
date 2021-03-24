import './App.css';
import FriendsList from './views/FriendsList';
import Header from './components/Header';

function App():JSX.Element {
  return (
    <div className="App">
      <Header />
      <FriendsList />
    </div>
  );
}

export default App;
