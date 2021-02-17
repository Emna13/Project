import { MDBDataTableV5 } from "mdbreact";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeAllMessages } from "../../js/actions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const AdminMessages = () => {
  const messages = useSelector((state) => state.userReducer.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(seeAllMessages());
  }, [dispatch]);
  return (
    <div>
        <NavBar/>
      <div style={{ margin: "50px 50px 200px 50px " }}>
        <MDBDataTableV5
          hover
          entriesOptions={[5, 10, 20]}
          entries={5}
          pagesAmount={4}
          data={{
            columns: [
              {
                label: "Id",
                field: "id",
                width: 270,
              },
              {
                label: "User",
                field: "user",
                width: 150,
                attributes: {
                  "aria-controls": "DataTable",
                  "aria-label": "User",
                },
              },
              {
                label: "Subject",
                field: "subject",
                width: 200,
              },
              {
                label: "Message",
                field: "messageText",
                sort: "disabled",
                width: 100,
              },
            ],

            rows: messages.map((message) => ({
              id: message.sendBy._id,
              user: message.sendBy.name + ' ' + message.sendBy.lastName,
              subject: message.subject,
              messageText: message.message,
            })),
          }}
          fullPagination
        />
        {/* Mails: 
          {messages.map(message=><div>
            <h5>{message.sendBy.name}</h5>
            <h6>{message.subject}</h6>
            <p>{message.message}</p>
          </div>)} */}
      </div>
      <Footer/>
    </div>
  );
};

export default AdminMessages;
