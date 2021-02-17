import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { seeAllQuestions, seeUsers } from "../../js/actions";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Admin = () => {
  const users = useSelector((state) => state.userReducer.users);
  console.log(users);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);

  useEffect(() => {
    dispatch(seeUsers());

    dispatch(seeAllQuestions());
  }, [dispatch]);

  const [datatable, setDatatable] = useState();

  return (
    <div>
      <NavBar />
      {loading ? (
        <LinearProgress />
      ) : (
        <div>
          {/* <div>
            {users.map((user) => (
            <div>{datatable.rows.name}={user.name}</div>
            
          ))}
          </div> */}
          <div>
            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
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
                ],

                rows: users.map((user) => ({
                  name: user.name,
                  lastName: user.lastName,
                  gender: user.gender,
                  phoneNumber: user.phoneNumber,
                  email: user.email,
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
