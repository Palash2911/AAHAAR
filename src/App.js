import './App.css';
import { Route, Routes, Navigate } from 'react-router';
import Home from './pages/Home'
import Auth from './pages/Auth';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Mess from './pages/Mess';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/auth' element={<Auth />} />
      <Route exact path='/buy' element={<Buy />} />
      <Route exact path='/sell' element={<Sell />} />
      <Route exact path='/mess' element={<Mess />} />
    </Routes>
  );
}

export default App;
