import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Student from './pages/Student';
import './App.css'
import PageNotFound from './pages/PageNotFound';

function App() {
  return(
    <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path="/student/:id" element={<Student />} />
     <Route path="*" element={<PageNotFound />} />
    </Routes>
  )

 
}

export default App
