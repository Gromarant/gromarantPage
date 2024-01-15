import { Route, Routes } from 'react-router-dom';
import Home from "../../../pages/Home/Home.jsx";
import About_me from "../../../pages/About_me/About_me.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';

function Main() {
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about_me' element={<About_me/>}/>
        <Route path='/sobre_mi' element={<About_me/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default Main;