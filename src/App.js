import './App.css';
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router , Routes,Route,Link} from "react-router-dom"
import MainPage from './components/MainPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/mainpage" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
