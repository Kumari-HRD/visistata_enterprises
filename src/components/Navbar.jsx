import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // include the .css extension

import { StyledMenubar } from "./styled-components";
import logo1 from "../assets/visistata_logo.png";
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
        <Link to="/" style={{ display: "block" }}>
          <div className="logo">
            <img
              src={logo1}
              height={64}
              style={{ display: "inline", verticalAlign: "baseline" }}
            />
            {/* <p> unlock ur teck potential</p> */}
          </div>
        </Link>

        <StyledMenubar model={items} />
      </nav>
    </>
  );
};
export default Navbar;
