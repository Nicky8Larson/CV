import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/sammyMERAZGA.jpg" alt="profile-pic"/>
                    <h3>Sammy MERAZGA</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                <li>
                    <NavLink exact to="/CV/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/CV/competences" activeClassName="navActive">
                        <i className="fas fa-mountain"></i>
                        <span>Compétences</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/CV/portfolio" activeClassName="navActive">
                        <i className="fas fa-images"></i>
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/CV/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"></i>
                        <span>Contact</span>
                    </NavLink>
                </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/sammy-merazga/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/SammyMERAZGA" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="mailto:sammy.merazga@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Sammy MERAZGA - 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;