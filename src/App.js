import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ai from './pages/Ai';
import { Route, Routes } from 'react-router-dom';
import First from './pages/First';
import Fifth from './pages/Fifth';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Sixth from './pages/Sixth';
import Seven from './pages/seven'

function App() {
  return (
    <div className='bg-[#141619]'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ai' element={<Ai />} />
        <Route path='/ai/first' element={<First />} />
        <Route path='/ai/third' element={<Third />} />
        <Route path='/ai/fourth' element={<Fourth />} />
        <Route path='/ai/fifth' element={<Fifth />} />
        <Route path='/ai/sixth' element={<Sixth />} />
        <Route path='/ai/seventh' element={<Seven />} />
        <Route path='/ai/Eight' element={<Seven />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
