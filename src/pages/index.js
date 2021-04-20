import * as React from "react";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <h3 style={{ marginTop: 300, display: "flex", justifyContent: "center" }}>
        Pearl St Homepage
      </h3>
    </div>
  );
};

export default IndexPage;
