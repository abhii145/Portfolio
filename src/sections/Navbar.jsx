import headerLogo from "../assets/icon/headerLogo.svg";
import { Navbar } from "flowbite-react";

function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <img alt="Flowbite Logo" src={headerLogo} className="h-10" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#home">Home</Navbar.Link>
        <Navbar.Link href="#aboutme">About</Navbar.Link>
        <Navbar.Link href="#project">Project</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
