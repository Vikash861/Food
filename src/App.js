import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './pages/auth/index.js'

function App() {
  

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="login" element={<Auth />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
