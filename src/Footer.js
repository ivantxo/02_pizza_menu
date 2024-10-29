import React from "react";

function Footer() {
  //   return React.createElement("footer", null, "We're currently open!");
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
  );
}

export default Footer;
