import logo from './logo.svg';
import './App.css';

function App() {
  var username = "test"
  const rentalURL = "http://localhost:3005/rentals?rentalUser="+username;
  const soldURL = "http://localhost";
  return (
    <div>
      <h1>Welcome to GameShare!</h1>
      <h2> <a href="http://localhost:3011/">Login</a></h2>
    </div>
  );
}

export default App;
