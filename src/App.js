import logo from './logo.svg';
import './App.css';

function App() {
  var username = "test"
  const rentalURL = "http://localhost:3005/rentals?rentalUser="+username;
  const soldURL = "http://localhost";
  return (
    <div>
      <h1>Welcome to GameShare!</h1>
      <h2> <a href="localhost:3001">View Games</a></h2>
      <h2> <a href={rentalURL}>View Rentals</a></h2>
      <h2> <a href={soldURL}>View Sold</a></h2>
    </div>
  );
}

export default App;
