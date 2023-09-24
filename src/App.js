import './App.css';
import Form from './components/Form';
import Formbuilder from './components/Formbuilder';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Formbuilder />}/>
        <Route path='/form/:formid' element={<Form />} />
      </Routes>      
    </div>
  );
}

export default App;
