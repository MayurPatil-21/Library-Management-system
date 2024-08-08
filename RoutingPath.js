import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Signup from "./Signup";
import Siup from "./Siup";
import InquiryForm from "./Inquiryform";


function RoutingPath()
{
    const element=
    
    <>
    <Routes>
        <Route path="Home" element={<Home/>}></Route>
        <Route path="AboutUs" element={<AboutUs/>}></Route>
        <Route path="Siup" element={<Siup/>}></Route>
        <Route path="Inquiryform" element={<InquiryForm/>}></Route>
        
    </Routes>
    </>
    return element;
}

export default RoutingPath;