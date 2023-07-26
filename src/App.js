import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './components/Footer';
import Reviews from './Pages/Reviews'
import Footer2 from './components/Footer2';
import Gallery from './Pages/Gallery';
import Offer from './Pages/Offer';
import OurPlans from './Pages/OurPlans';
import Privacy from './Pages/Privacy';




function App() {
  return (
    <div>
     <BrowserRouter>
        <div >
          <ScrollToTop></ScrollToTop>
          <Header></Header>

          <Routes>
            <Route path="/" index exact element={<Home></Home>}></Route>
            <Route path="/about" exact element={<About></About>}></Route>
            <Route path="/gallery" exact element={<Gallery></Gallery>}></Route>

            <Route path="/contact" exact element={<Contact></Contact>}></Route>

            <Route path="/reviews" exact element={<Reviews></Reviews>}></Route>

            <Route path="/offer" exact element={<Offer></Offer>}></Route>

            <Route path="/plan" exact element={<OurPlans></OurPlans>}></Route>

            <Route path="/privacy" exact element={<Privacy></Privacy>}></Route>



          </Routes>
           <Footer></Footer>
           {/* <Footer2></Footer2> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
