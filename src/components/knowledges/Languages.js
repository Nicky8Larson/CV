import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "HTML/CSS", xp:2},
            {id: 2, value: "PHP", xp:1.9},
            {id: 3, value: "Javascript", xp:1.5},
            {id: 4, value: "Typescript", xp:1.3},
            {id:5, value: "Java", xp:0.7}
        ],
        frameworks : [
            {id: 1, value: "VueJS", xp:1.9},
            {id: 2, value: "ReactJS", xp:1.3},
            {id: 4, value: "Bootstrap", xp:1.6},
            {id: 3, value: "Symfony", xp:1.0},
            {id: 4, value: "ExpressJS", xp:1.1},
            {id: 4, value: "Quarkus", xp:0.2}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar languages={languages} className="languagesDisplay" title="languages"/>
                <ProgressBar languages={frameworks} title="frameworks front & back" className="frameworksDisplay"/>
            </div>
        );
    }
}

export default Languages;