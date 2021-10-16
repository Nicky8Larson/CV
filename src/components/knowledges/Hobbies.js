import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-plane"></i>
                    <span>Voyager</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-book-open"></i>
                    <span>Lecture</span>
                    </li>
                <li className="hobby">
                    <i className="fas fa-futbol"></i>
                    <span>Sports</span>
                    </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>jeux vidéos</span>
                    </li>
            </ul>
        </div>
    );
};

export default Hobbies;