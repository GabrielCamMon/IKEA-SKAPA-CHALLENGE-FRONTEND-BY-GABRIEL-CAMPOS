import React from "react";
import { Link } from "react-router-dom";
import ikeaLogo from "../../assets/logo-ikea.png";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={ikeaLogo} alt="IKEA Logo" className="home__logo" />
        <h1 className="home__title">Skapa UI Demo</h1>

        <Link to="/demo/ltr" className="home__link">
          Go to LTR input demo screen
        </Link>
        <Link to="/demo/rtl" className="home__link">
          Go to RTL input demo screen
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
