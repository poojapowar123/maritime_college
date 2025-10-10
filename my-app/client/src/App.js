import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Topbar from "./component/topbar/Topbar";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import Gallery from "./component/Gallery/Gallery";
import { Box } from "./component/homeComponents/Box";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
    <Topbar/>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
      {/* <Gallery/> */}
    </>
    //   <div className="App">
    //   <Box/>
    // </div>
  );
}

export default App;
