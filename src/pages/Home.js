import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Sammy MERAZGA</h1>
          <h2>Alternant Développeur Full-Stack</h2>
          <div className="pdf">
            <a href="./media/Merazga_Sammy_CV.pdf" target="_blank">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
