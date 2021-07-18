import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="header"></div>
        <div className="footer">
          <button>
            <Link to="/login">PRÓXIMO</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
