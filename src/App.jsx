
import Aside from './assets/Components/Aside';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';

function App() {
  

  return (
    <Router>
      <Routes>
        
        <Route element={<Layout/>}>
            <Route path='/' element={<h1>Home page</h1>}/>
            <Route path='/doctor' element={<h1>Doctor page</h1>}/>
            <Route path='/appointment' element={<h1>Appointment page</h1>}/>
            <Route path='/patients' element={<h1>Patients page</h1>}/>
            <Route path='/staff' element={<h1>Staff page</h1>}/>
            <Route path="/profile" element={<h1>Profile page</h1>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
