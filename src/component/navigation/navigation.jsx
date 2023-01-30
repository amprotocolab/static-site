import React from "react";
//import {Link} from 'react-router-dom';

import "./navigation.styles.scss";

const Navigation = () =>{
    return(
        <div className="navigation">
                <nav className="navBar">
                    < ul className = "navlinkBar" >
                        <li><a className="nav-link"  href = '/home'>Home</a></li>
                        <li><a className="nav-link"  href = '/about'>About       </a></li>
                        <li><a className="nav-link"  href = '/services'>Services    </a></li>
                        <li><a className="nav-link"  href = '/portfolio'>Portfolio   </a></li>
                        <li><a className="nav-link"  href = '/team'>Team        </a></li>
                        <li><a className="dropdown" >
                                
                              <button class="dropbtn">Dropdown</button>
                              <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                              </div>
                            
                            </a></li> 
                            



                        <li><a className="nav-link"  href = '/contact'>Contact     </a></li>
                        <li> < a className = "nav-link" href = '/getstarted'> 
                            <button className="button"> Get Started </button>
                            </a> </li>
                    </ul>
                </nav>
        </div>
    );
}
export default Navigation;