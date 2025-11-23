import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // include the .css extension

import { StyledMenubar } from "./styled-components";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      // icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "About Us",
      command: () => navigate("/about"),
    },
    {
      label: "Courses",
      command: () => navigate("/courses"),
    },
    {
      label: "Services",
      command: () => navigate("/services"),

      // items: [
      //   {
      //     label: "College Training",
      //     command: () => navigate("/theming"),
      //   },
      //   {
      //     label: "Corporate Training",
      //     command: () => navigate("/theming"),
      //   },
      //   {
      //     label: "Internship and Projects",
      //     command: () => navigate("/theming"),
      //   },
      //   {
      //     label: "School Training",
      //     command: () => navigate("/theming"),
      //   },
      //   {
      //     label: "Hire from us",
      //     command: () => navigate("/theming"),
      //   },
      // ],
    },
    {
      label: "Contact",
      command: () => navigate("/contact"), // Add path if needed
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            {/* <img src={logo} height={"64px"} /> */}
            logo
          </Link>
        </div>
        {/* <ul className="navbar-link">
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
        <StyledMenubar model={items} />
      </nav>
    </>
  );
};
export default Navbar;
