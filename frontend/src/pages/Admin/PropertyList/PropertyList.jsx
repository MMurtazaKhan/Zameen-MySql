import React, {
  useState,
  useRef,
  useEffect
  // , Fragment
} from "react";
import "./PropertyList.css";

import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { DataGrid } from "@material-ui/data-grid";
import { MdDelete } from "react-icons/md";
import { Button } from "@material-ui/core";

import { clearErrors, getAdminProperty } from "../../../actions/sellAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const PropertyList = () => {
  const [show, setShow] = useState("yes");
  const sidebarTab = useRef(null);

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, property } = useSelector((state) => state.property);

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
  //     views: 4,
  //     price: 45000,
  //     address: "House-No:210 near azizabad malir",
  //     city: "Karachi",
  //     landArea: "200",
  //     propertyTitle: "This is property title",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     createdAt: "14-7-22",
  //   },
  //   {
  //     _id: 2,
  //     image: "/s2.jpg",
  //     views: 18,
  //     price: 590000,
  //     address: "House-No:21 near shah faisal masjid",
  //     city: "Islamabad",
  //     landArea: "200",
  //     propertyTitle: "This is property title",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     createdAt: "14-7-20",
  //   },
  //   {
  //     _id: 3,
  //     image: "/s1.jpg",
  //     views: 47,
  //     price: 760000,
  //     address: "House-No:210 near shalimar garden",
  //     city: "Lahore",
  //     landArea: "200",
  //     propertyTitle: "This is property title",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     createdAt: "13-5-20",
  //   },
  // ];

  const columns = [
    { field: "id", headerName: "Property ID", minWidth: 200, flex: 0.5 },

    {
      field: "city",
      headerName: "City",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 0.3,
    },

    {
      field: "landArea",
      headerName: "LandArea",
      type: "number",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "date",
      minWidth: 150,
      flex: 0.5,
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
          <Button
          // onClick={() =>
          //   deleteProductHandler(params.getValue(params.id, "id"))
          // }
          >
            <MdDelete />
          </Button>
        );
      },
    },
  ];

  const rows = [];

  property &&
    property.forEach((item) => {
      rows.push({
        id: item._id,
        city: item.city,
        price: item.price,
        landArea: item.landArea,
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
    //   alert.success("Product Deleted Successfully");
    //   history.push("/admin/dashboard");
    //   dispatch({ type: DELETE_PRODUCT_RESET });
    // }
    dispatch(getAdminProperty());
  }, [
    dispatch,
    alert,
    error,
    //     //  deleteError, history, isDeleted
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
          <div className="propertyListContainer">
            <h1 id="propertyListHeading">ALL PROPERTY</h1>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="propertyListTable"
              autoHeight
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

// import React, {
//   Fragment,
//    useEffect,
//   useRef,
//   useState,
// } from "react";
// import "./PropertyList.css";
// import Sidebar from "../Sidebar/Sidebar";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { DataGrid } from "@material-ui/data-grid";
// import { MdDelete } from "react-icons/md";
// import { Button } from "@material-ui/core";
// import { getAdminProperty, clearErrors } from "../../../actions/sellAction";
// import { useSelector, useDispatch } from "react-redux";
// import { useAlert } from "react-alert";

// const PropertyList = () => {
//   const dispatch = useDispatch();
//   const alert = useAlert();

// const {
//   error,
//   property,
// } = useSelector((state) => state.property);

//   const [show, setShow] = useState("yes");
//   const sidebarTab = useRef(null);

//   const controlSidebar = (e, tab) => {
//     if (tab === "yes") {
//       sidebarTab.current.classList.add("sideBarMoveToLeft");
//       sidebarTab.current.classList.remove("admin-sidebar");
//       setShow("no");
//     } else {
//       sidebarTab.current.classList.add("admin-sidebar");
//       sidebarTab.current.classList.remove("sideBarMoveToLeft");
//       setShow("yes");
//     }
//   };

//   const columns = [
//     { field: "id", headerName: "Product ID", minWidth: 220, flex: 0.5 },

//     {
//       field: "city",
//       headerName: "City",
//       minWidth: 120,
//       flex: 0.3,
//     },
//     {
//       field: "address",
//       headerName: "Address",
//       minWidth: 350,
//       flex: 1,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       type: "number",
//       minWidth: 100,
//       flex: 0.4,
//     },
//     {
//       field: "landArea",
//       headerName: "Land Area",
//       type: "number",
//       minWidth: 120,
//       flex: 0.3,
//     },
//     {
//       field: "actions",
//       flex: 0.3,
//       headerName: "Actions",
//       minWidth: 150,
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <Fragment>
//             <Button
//             // onClick={() =>
//             //   deleteProductHandler(params.getValue(params.id, "id"))
//             // }
//             >
//               <MdDelete style={{ fontSize: "1.2rem" }} />
//             </Button>
//           </Fragment>
//         );
//       },
//     },
//   ];

//   const rows = [];

//   property &&
//     property.forEach((item) => {
//       rows.push({
//         id: item._id,
//         city: item.city,
//         address: item.address,
//         price: item.price,
//         landArea: item.landArea,
//       });
//     });

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     // if (deleteError) {
//     //   alert.error(deleteError);
//     //   dispatch(clearErrors());
//     // }

//     // if (isDeleted) {
//     //   alert.success("Product Deleted Successfully");
//     //   history.push("/admin/dashboard");
//     //   dispatch({ type: DELETE_PRODUCT_RESET });
//     // }

//     dispatch(getAdminProperty());
//   }, [
//     dispatch,
//     alert,
//     error,
//     //  deleteError, history, isDeleted
//   ]);

//   return (
//     <div className="dashboard">
//       <div className="admin-sidebar" ref={sidebarTab}>
//         <Sidebar />
//       </div>
//       <div className="admin-container">
//         <div className="dashboard-nav">
//           <button onClick={(e) => controlSidebar(e, show)}>
//             <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
//           </button>
//         </div>
//         <div>
//           <div className="productListContainer">
//             <h1 id="productListHeading">ALL PRODUCTS</h1>

//             <DataGrid
//               rows={rows}
//               columns={columns}
//               pageSize={10}
//               disableSelectionOnClick
//               className="productListTable"
//               autoHeight
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyList;

// import React, { useState, useRef } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Property = () => {
//   const [show, setShow] = useState("yes");
//   const sidebarTab = useRef(null);

//   const controlSidebar = (e, tab) => {
//     if (tab === "yes") {
//       sidebarTab.current.classList.add("sideBarMoveToLeft");
//       sidebarTab.current.classList.remove("admin-sidebar");
//       setShow("no");
//     } else {
//       sidebarTab.current.classList.add("admin-sidebar");
//       sidebarTab.current.classList.remove("sideBarMoveToLeft");
//       setShow("yes");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="admin-sidebar" ref={sidebarTab}>
//         <Sidebar />
//       </div>
//       <div className="admin-container">
//         <div className="dashboard-nav">
//           <button onClick={(e) => controlSidebar(e, show)}>
//             <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
//           </button>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Property;
