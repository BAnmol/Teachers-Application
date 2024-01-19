import React,{useState} from "react";
import {
  FaBars,
  FaTh,
  FaRegChartBar,
  FaThList,
  FaAddressCard,
  // FaUser
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Sidebar({ children }) {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/batch",
      name: "Batches",
      icon: <FaThList />,
    },
    // {
    //   path: "/students",
    //   name: "Students",
    //   icon: <FaUser/>,
    // },
    {
      path: "/attendance",
      name: "Attendance",
      icon: <FaRegChartBar/>,
    },
    {
      path: "/profile",
      name: "My Profile",
      icon: <FaAddressCard />,
    },
  ];

  return (
    <div className="container">
      <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
        <div className="bars-logo">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><span>Class Teachers</span><p>Learning Systems</p></h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
          {menuItem.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon" title={item.name}>{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} title={item.name} className="link_text">{item.name}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
