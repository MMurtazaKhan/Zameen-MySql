import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { TreeView, TreeItem } from "@material-ui/lab";
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

      <Link to="/admin/users">
        <p>
          <FaListAlt />
          Users
        </p>
      </Link>

      <Link>
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
      </Link>

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
