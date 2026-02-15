
import { Navbar } from "./components/Navbar";
import Header from "./components/Header"
import Testimonials_and_exp from "./components/Testimonials"
import AnimateCounter from "./models/AnimateCounter";
import Awards from "./components/Awards";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import './index.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
  <BrowserRouter>
    <Navbar /> 
    <Routes >
      <Route path='/' element={
        <> 
          <Header />
          <AnimateCounter />
          {/* <Testimonials_and_exp/> */}
          {/* <Awards /> */}
         {/* <TechStack /> */}
          {/* <Contact /> */}
        </>
      }> 
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
