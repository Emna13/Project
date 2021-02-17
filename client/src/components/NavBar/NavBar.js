import React, { useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./NavBar.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import { getProfile } from "../../js/actions";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseAndLogOut = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
  };
  return (
    <div>
      {loading ? (
        <LinearProgress />
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarExample01">
              <div>
                <img
                  src="https://gomycodewebsite.blob.core.windows.net/website/img/black_Logo_342868e838_129748d4cd.svg"
                  alt=""
                />
              </div>
              <ul className="navBar">
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/">
                    <h6>
                      <HomeIcon /> Home
                    </h6>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/about">
                    <h6>
                      <InfoOutlinedIcon /> About
                    </h6>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/contact">
                    <h6>
                      <MailOutlineOutlinedIcon/> Contact
                    </h6>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Button
                    onClick={handleClick}
                    className="nav-link"
                    id="profile"
                    style={{
                      border: "none",
                      background: "none",

                      padding: "0",
                      font: "inherit",
                      textTransform: "capitalize",
                    }}
                  >
                    <Link className="nav-link">
                      <h6>
                        <AccountCircleOutlinedIcon /> {user && user.name + " " + user.lastName}
                      </h6>
                    </Link>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{ marginTop: "50px", marginLeft:"40px" }}
                    
                  >
                    <MenuItem onClick={handleClose} className="menu"> 
                      <Link to="/profile">
                        <VisibilityOutlinedIcon fontSize="small"/> Profile
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseAndLogOut} className="menu">
                      <Link to="/">
                        <PowerSettingsNewOutlinedIcon fontSize="small"/> Logout
                      </Link>
                    </MenuItem>
                  </Menu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
