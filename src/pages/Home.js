import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Button from "../components/ui/button/Button";

function Home() {
  return (
    <>
      <div className="header">
        <h1>MixAgro</h1>
        <p className="slogan">
          Fazer um mix dos seus defensivos nuca foi tão fácil
        </p>
      </div>
      <div className="footer">
        <Button>
          <Link style={{ textDecoration: "none" }} to="/login">
            Próximo
          </Link>
        </Button>
      </div>
    </>
  );
}

export default Home;
