import React from "react";
import Order from "./Order";

function Footer() {
  const openHour = 0;
  const closeHour = 6;
  const hour = new Date().getHours();

  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

export default Footer;
