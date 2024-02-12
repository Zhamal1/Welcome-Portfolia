import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Work from './components/Work/Work';
import Expre from './components/Expre/Expre';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Busines from './components/pages/Busines';
import Simple from './components/pages/Simple';
import Muzic from './components/Muzic/Muzic';
  
function App() {
  return (
    <div className="App">
      <header className="App-header wrap">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header/>}/>
          </Routes>
          <Routes>
            <Route path='/' element={<Section/>}/>
            <Route path='/busines' element={<Busines/>}/>
            <Route path='/simple' element={<Simple/>}/>
            <Route path='/muzic' element={<Muzic/>}/>
          </Routes>
          <Routes>
            <Route path='/' element={<Work/>}/>
          </Routes>
          <Routes>
            <Route path='/' element={<Expre/>}/>
          </Routes>
            <Form/>
            <Footer/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
