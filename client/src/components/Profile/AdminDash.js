import React, { useEffect } from "react";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import "./Profile.css";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { seeAllMessages, seeUsers } from "../../js/actions";
import { Link } from "react-router-dom";

const AdminDash = () => {
    const users = useSelector(state => state.userReducer.users)
    const messages = useSelector(state => state.userReducer.messages)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(seeUsers())
        dispatch(seeAllMessages())
    }, [dispatch])
  return (
    <div>
      <NavBar />
      <div className="welcome">
        <div className="welcome">Hello Admin, welcome back ! </div>
        <div className="container">
          <div className="row">
            <div className="col-6 ml">
              <Link to="/users">
                <PeopleAltRoundedIcon style={{ fontSize: 100 }} />
                <span class="badge rounded-pill badge-notification bg-danger">
                  {users.length}
                </span>
               <br/> USERS
                </Link>
              </div>
              <div className="col-6 ml">
              <Link to="/messages">
                <ForumRoundedIcon style={{ fontSize: 100 }} />
                <span class="badge rounded-pill badge-notification bg-danger">
                  {messages.length}
                </span>
                <br/> MESSAGES
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
