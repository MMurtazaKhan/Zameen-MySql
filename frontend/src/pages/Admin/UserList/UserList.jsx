import React, { Fragment, useEffect, useRef, useState } from "react";
import "./UserList.css";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { DataGrid } from "@material-ui/data-grid";
import { MdDelete } from "react-icons/md";
import { Button } from "@material-ui/core";
import { getAllUsers, clearErrors
  // , deleteUser
 } from "../../../actions/userAction";
import { useSelector, useDispatch } from "react-redux";

const UserList = () => {

  const dispatch = useDispatch();
  const { error, users } = useSelector((state) => state.allUsers);


  const [show, setShow] = useState("yes");
  const sidebarTab = useRef(null);

  const controlSidebar = (e, tab) => {
    if (tab === "yes") {
      sidebarTab.current.classList.add("sideBarMoveToLeft");
      sidebarTab.current.classList.remove("admin-sidebar");
      setShow("no");
    } else {
      sidebarTab.current.classList.add("admin-sidebar");
      sidebarTab.current.classList.remove("sideBarMoveToLeft");
      setShow("yes");
    }
  };


  // const property = [
  //   {
  //     _id: 1,
  //     image: "/s1.jpg",
  //     name: "Murtaza Khan",
  //     email: "murtaza@gmail.com",
  //     phoneNo: "034273733",
  //     createdAt: "2-jun-22"

  //   },
  //   {
  //     _id: 2,
  //     image: "/s1.jpg",
  //     name: "Abdullah Shujabad",
  //     email: "abdullah@gmail.com",
  //     phoneNo: "034273733",
  //     createdAt: "1-jun-22"

  //   },
  //   {
  //     _id: 3,
  //     image: "/s1.jpg",
  //     name: "Aziz Malir",
  //     email: "aziz@gmail.com",
  //     phoneNo: "034273733",
  //     createdAt: "2-apr-22"

  //   },
    
  // ];

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 220, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "phoneNo",
      headerName: "Phone No",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "createdAt",
      headerName: "Joined Since",
      type: "number",
      minWidth: 250,
      flex: 0.3,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
            // onClick={() =>
            //   deleteProductHandler(params.getValue(params.id, "id"))
            // }
            >
              <MdDelete style={{ fontSize: "1.2rem" }} />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        email: item.email,
        phoneNo: item.phoneNo,
        createdAt: item.createdAt,
      });
    });

    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      // if (deleteError) {
      //   alert.error(deleteError);
      //   dispatch(clearErrors());
      // }
  
      // if (isDeleted) {
      //   alert.success(message);
      //   history.push("/admin/users");
      //   dispatch({ type: DELETE_USER_RESET });
      // }
  
      dispatch(getAllUsers());
    }, [dispatch, error
      // , deleteError, history, isDeleted, message
    ]);
  


  return (
    <div className="dashboard">
      <div className="admin-sidebar" ref={sidebarTab}>
        <Sidebar />
      </div>
      <div className="admin-container">
        <div className="dashboard-nav">
          <button onClick={(e) => controlSidebar(e, show)}>
            <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
        <div>
          <div className="userListContainer">
            <h1 id="userListHeading">All Users</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="userListTable"
              autoHeight

              style={{textAlign: "start"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;