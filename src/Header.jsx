import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Button, Navbar } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Notes keep</Navbar.Brand>
      </Navbar>
    </>
  );
}
