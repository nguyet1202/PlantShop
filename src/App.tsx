import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Shop, Contact, AboutUs} from "./Pages";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route>
               <Route path="/" element={<Home/>}/>
               <Route path="Shop" element={<Shop/>}/>
               <Route path="contact" element={<Contact/>}/>
               <Route path="aboutus" element={<AboutUs/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default App;