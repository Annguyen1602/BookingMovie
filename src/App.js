import logo from './logo.svg';
// import './App.css';
import { Outlet } from 'react-router-dom';
import BookingTicketMovie from './Components/BookingTicketMovie/BookingTicketMovie';

function App() {
  return (
    <div className="App">
      <BookingTicketMovie/>
    </div>
  );
}

export default App;
