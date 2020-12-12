import React from "react";

import "./styles.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="App">
      <p>Copyright © {year}</p>
    </footer>
  );
}
