import React from "react";

function Footer() {
  const openHour = 12;
  const closeHour = 23;
  const hour = new Date().getHours();

  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

export default Footer;
