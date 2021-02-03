import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getProfile } from "../../js/actions";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NavBar from "../NavBar/NavBar";

const Profile = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getProfile());
   
   
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <NavBar />
        
      </header>
      <div style={{ backgroundColor: "#F6F6F6" }}>
        {loading ? (
          <div
            class="spinner-border"
            role="status"
            style={{ textAlign: "center" }}
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : 
        (
          ! isAuth ? (
            <Redirect to="/login" />
          ):
          <div>
            <AccountBoxIcon style={{ fontSize: 300 }} />

            <div className="Container">
              <div>Name: {user.name}</div>
              <div>Last Name: {user.lastName}</div>
              <div>Gender: {user.gender} </div>
              <div>Phone Number: {user.phoneNumber}</div>
              <div>Email:{user.email} </div>
            </div>
            <a
              href="/"
              className="btn btn-danger btn-lg m-2"
              role="button"
              rel="nofollow"
              target="_blank"
              onClick={() => localStorage.removeItem("token")}
            >
              Log out
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
