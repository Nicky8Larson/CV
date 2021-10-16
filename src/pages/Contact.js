import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Marseille</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0769171196">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !');}}>07 69 17 11 96</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <CopyToClipboard text="sammy.merazga@gmail.com">
                                <span className="clickInput" onClick={() => { alert('E-mail copié !');}}>sammy.merazga@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/sammy-merazga/" target="_blank" rel="noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/SammyMERAZGA" target="_blank" rel="noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:sammy.merazga@gmail.com" target="_blank" rel="noreferrer">
                            <h4>Gmail</h4>
                            <i className="fas fa-at"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;