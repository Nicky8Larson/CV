import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "HTML/CSS", xp:2},
            {id: 2, value: "Javascript", xp:1.6},
            {id: 3, value: "PHP", xp:1.4},
            {id: 4, value: "C#", xp:1.2},
            {id:5, value: "Java", xp:0.7}
        ],
        frameworks : [
            {id: 1, value: "React", xp:1.1},
            {id: 2, value: "Bootstrap", xp:0.8},
            {id: 3, value: "Symfony", xp:0.4},
            {id: 4, value: "Angular", xp:0.2}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar languages={languages} className="languagesDisplay" title="languages"/>
                <ProgressBar languages={frameworks} title="frameworks & bibliothèques" className="frameworksDisplay"/>
            </div>
        );
    }
}

export default Languages;