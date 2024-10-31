import React from "react";

function Footer() {
  const openHour = 12;
  const closeHour = 24;
  const hour = new Date().getHours();

  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We are open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

export default Footer;
