
import './App.css';
import Aside from './assets/Components/Aside';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Sidebar/>}/>
      </Routes>
    </Router>
  )
}

export default App
