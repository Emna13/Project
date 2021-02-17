import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../js/actions";

import Admin from "./Admin";
import UserProfile from "./UserProfile";

const Profile = () => {
  
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getProfile())
  }, [])
  

  return (
    <div style={{ textAlign: "left" }}>
  

      <div
        style={{ backgroundColor: "#F6F6F6", width: "100%", height: "100% " }}
      >
        {user && user._id !== "60184f111638330d10017502" ? <UserProfile /> : <Admin />}
      </div>

    </div>
  );
};

export default Profile;
