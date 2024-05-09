import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ai from './pages/Ai';
import { Route, Routes } from 'react-router-dom';
import First from './pages/First';
import Fifth from './pages/Fifth';
import Third from './pages/Third';

function App() {
  return (
    <div className='bg-[#141619]'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ai' element={<Ai />} />
        <Route path='/ai/first' element={<First />} />
        <Route path='/ai/third' element={<Third />} />
        <Route path='/ai/fifth' element={<Fifth />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
