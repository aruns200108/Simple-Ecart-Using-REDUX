import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductView from './components/ProductView';
import './App.css';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Header/>

<Routes>
<Route path='' element={  <Home/>}/>
<Route path='/productview/:id' element={ <ProductView/>}/>
      
</Routes>
<Footer/>

    </div>
  );
}

export default App;
