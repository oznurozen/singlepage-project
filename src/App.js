import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Policy from './components/Policy'
import Personal from './components/Personal'
import Footer from './components/Footer'
import Error from './components/Error'


function App() {
  return (
    <>
    < Header/>
    <Routes>
      <Route exact path='/' element= { <Home/> }/>
      <Route path='/about' element= { <About/> }/>
      <Route path='/personal' element= { <Personal/> }/>
      <Route path='/contact' element= { <Contact/> }/>
      <Route path='/policy' element= { <Policy/> }/>
      <Route path='/*' element= {<Error />}/>
    </Routes> 
    <Footer/>
  </>
  );
}

export default App;
