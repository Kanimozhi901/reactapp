import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Route, Routes, Link } from 'react-router-dom';
import './Heading.css';
import Home from './Home';
import Categories from './Categories';
import Products from './Products';
import Pricing from './Pricing';
import Blogs from './Blogs';
import Contactus from './Contactus';
import Loginform from './Loginform';

function Heading() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <ul className="loginlink">
          
            <li>
            <h2>CooKCake</h2>
              <Link to="/" className="links home-link">HOME</Link>&nbsp;&nbsp;
              <Link to="/categories">CATEGORIES</Link>&nbsp;&nbsp;
              <Link to="/products">PRODUCTS</Link>&nbsp;&nbsp;
              <Link to="/pricing">PRICING</Link>&nbsp;&nbsp;
              <Link to="/blogs">BLOGS</Link>&nbsp;&nbsp;
              <Link to="/contact">CONTACT US</Link>&nbsp;&nbsp;
              <Link to="/login">LOGIN</Link>&nbsp;&nbsp;
            </li>
          </ul>
        </Toolbar>
      </AppBar>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<Loginform />} />
      </Routes>
    </Box>
  );
}

export default Heading;