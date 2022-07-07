import React, {  useEffect, useRef, useState } from "react";
import "./ProjectRegisteration";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { DataGrid } from "@material-ui/data-grid";
import { getRegisterations, clearErrors
  // , deleteUser
 } from "../../../actions/registerationAction";
import { useSelector, useDispatch } from "react-redux";

const ProjectRegisteration = () => {

  const dispatch = useDispatch();
  const { error, registerations } = useSelector((state) => state.allRegisterations);


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


  const columns = [
    { field: "id", headerName: "Registeration ID", minWidth: 220, flex: 0.5 },
    // { field: "id2", headerName: "Project ID", minWidth: 220, flex: 0.5 },
    // { field: "id3", headerName: "User ID", minWidth: 220, flex: 0.5 },


    {
      field: "totalInstallments",
      headerName: "Total Installments",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "registeredAt",
      headerName: "Registered On",
      type: "number",
      minWidth: 250,
      flex: 0.3,
    },
  ];

  const rows = [];

  registerations &&
  registerations.forEach((item) => {
      rows.push({
        id: item._id,
        // id2: item._id,
        // id3: item._id,

        totalInstallments: item.totalInstallments,
        registeredAt: item.registeredAt,
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
  
      dispatch(getRegisterations());
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

export default ProjectRegisteration;