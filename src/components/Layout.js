import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../App.css";
const Layout = () => {
    return (
        
            <div>
                <NavLink className="link link-home" exact="true" to="/">Home</NavLink>
                <NavLink className="link link-works" exact="true" to="Works">Works</NavLink>
                <NavLink className="link link-contact" exact="true" to="Contact">Contact</NavLink>
            </div>
             
   
                  
               

        
    );
};

export default Layout;
