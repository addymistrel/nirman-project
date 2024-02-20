import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import HomeScreen from './Pages/HomeScreen';
function App() {
  return (
    <>
    <BrowserRouter>
      <HomeScreen/>
    </BrowserRouter>
    </>
  );
}

export default App;
