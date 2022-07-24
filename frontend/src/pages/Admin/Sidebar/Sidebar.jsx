import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {MdDashboard} from "react-icons/md";
import {FaListAlt} from "react-icons/fa";
import {IoAdd} from "react-icons/io5";
import {AiFillProject} from "react-icons/ai";




const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/dashboard">
        <p>
         <MdDashboard style={{marginLeft:"1rem"}}/>
          Dashboard
        </p>
      </Link>

      <Link to="/admin/property">
        <p>
          <FaListAlt />
          Property
        </p>
      </Link>

      

      <Link to="/admin/createProject">
        <p>
          <IoAdd />
          Create Project
        </p>
      </Link>

      {/* <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Projects">
            <Link to="/admin/projects">
              <TreeItem
                nodeId="2"
                label="All"
                icon={<FaListAlt />}
              />
            </Link>

            <Link to="/admin/createProject">
              <TreeItem
                nodeId="3"
                label="Create"
                icon={<IoAdd />}
              />
            </Link>
          </TreeItem>
        </TreeView>
      </Link> */}

      <Link to="/admin/proj-registeration">
        <p>
          <AiFillProject />
          Project Registeration
        </p>
      </Link>


    </div>
  );
};

export default Sidebar;
