import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './componants/HomePage';
import ContactPage from './componants/ContactPage';
import Navbar from './componants/Navbar';
import Footer  from './componants/Footer';
import Logs from './componants/Logs';
import ShortUrl from './componants/ShortUrl';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{maxHeight:"75vh",overflow:"hidden"}}>
     <Routes>
      <Route path="/" element={<ShortUrl/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/logs" element={<Logs/>} />
     </Routes>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
