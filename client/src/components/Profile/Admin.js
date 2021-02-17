import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { seeAllQuestions, seeUsers } from "../../js/actions";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Admin = () => {
  const users = useSelector((state) => state.userReducer.users);
    const question = useSelector((state) => state.questionReducer.question);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);

  useEffect(() => {
    dispatch(seeUsers());
    dispatch(seeAllQuestions());
  
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {loading ? (
        <LinearProgress />
      ) : (
        <div>
          <div style={{ margin: "50px" }}>
            <MDBDataTableV5
              hover
              entriesOptions={[5, 10, 20]}
              entries={5}
              pagesAmount={4}
              data={{
                columns: [
                  {
                    label: "Name",
                    field: "name",
                    width: 150,
                    attributes: {
                      "aria-controls": "DataTable",
                      "aria-label": "Name",
                    },
                  },
                  {
                    label: "Last Name",
                    field: "lastName",
                    width: 270,
                  },
                  {
                    label: "Gender",
                    field: "gender",
                    width: 200,
                  },
                  {
                    label: "Phone Number",
                    field: "phoneNumber",
                    sort: "asc",
                    width: 100,
                  },
                  {
                    label: "Email",
                    field: "email",
                    // sort: "disabled",
                    width: 150,
                  },
                  {
                    label: "Questions Number",
                    field: "questionsNumber",
                    // sort: "disabled",
                    width: 100,
                  },
                  // {
                  //   label: "Comments Number",
                  //   field: "commentsNumber",
                  //   // sort: "disabled",
                  //   width: 100,
                  // },
                ],

                rows: users
                  .filter((user) => user._id !== "60184f111638330d10017502")
                  .map((user) => ({
                    name: user.name,
                    lastName: user.lastName,
                    gender: user.gender,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    questionsNumber: question.filter(
                      (question) => question.postedBy._id === user._id
                    ).length,
                    // commentsNumber:question.comments.filter(comment=>comment.postedBy._id==user._id).length,
                  })),
              }}
              fullPagination
            />
          </div>
          
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Admin;
