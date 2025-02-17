import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Body({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Body;
