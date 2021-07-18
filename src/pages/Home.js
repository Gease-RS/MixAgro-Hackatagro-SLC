import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <div className="img-statico">
        <Link to="/login">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mixagro-hackatagro-slc.appspot.com/o/Home.png?alt=media&token=cda3b7cd-024d-4a79-8e62-d9fc44bf847c"
            alt="Home"
          />
        </Link>
      </div>
    </>
  );
}

export default Home;
