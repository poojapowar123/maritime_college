import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Topbar from "./component/topbar/Topbar";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import Gallery from "./component/Gallery/Gallery";
import { Box } from "./component/homeComponents/Box";
import Footer from "./component/footer/Footer";
import EmployeeForm from "./component/form/EmployeeForm";

function App() {
  return (
    <>
    {/* <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
         </Routes>
      <Footer/> */}
        {/* <Route path="/about" element={<About />} /> */}



        <EmployeeForm/>
     
    </>
  );
}

export default App;
