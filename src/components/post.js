import React from "react";
import Navbar from "./Navbar"
import ReactiveQR from "reactive-qr";
const post = () => {
  return (
      <>
      <Navbar/>
      <center>
        <ReactiveQR onCode={code => console.log(code)} />
      </center>
      </>

  );
}

export default post;