import React from "react";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import HomeIcon from "@material-ui/icons/Home";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import './NavBar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-white" >
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarExample01">
              <div >
                <img src="https://gomycodewebsite.blob.core.windows.net/website/img/black_Logo_342868e838_129748d4cd.svg" />
              </div>
              <ul className="navBar">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="/">
                    <HomeIcon /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <InfoOutlinedIcon /> About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <ContactSupportIcon /> Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/profile">
                    <PermContactCalendarIcon /> Profile
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/questions">
                     Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
