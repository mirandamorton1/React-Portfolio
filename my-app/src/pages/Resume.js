import React from 'react';

export default function Resume() {
  return (
    <section className="container">
    <h2 className="mAll">Resume</h2>
    <div className="mLeftRight">Download my <a href={require(`../assets/images/Resume.pdf`).default}>Resume!</a></div>
    <div className="resume">
        <div className="res">
            <h3>Front-end Skills</h3>
            <ul className="skillsList">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Media Queries</li>
                <li>Responsive Design</li>
                <li>Version Control (Git)</li>
                <li>Testing/Debugging (Jest)</li>
            </ul>
        </div>
        <div className="res">
            <h3>Back-end Skills</h3>
            <ul className="skillsList">
                <li>API's</li>
                <li>Node</li>
                <li>Express</li>
                <li>Handlebars.js</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>GraphQL</li>
                <li>Apollo</li>
                <li>XML</li>
                <li>XSL</li>
                <li>JSON</li>
                <li>REST</li>
            </ul>
        </div>
        <div className="res">
            <h3>Applications</h3>
            <ul className="skillsList">
                <li>Github</li>
                <li>GitHub Pages</li>
                <li>Heroku</li>
                <li>MySQL</li>
                <li>Visual Studio Code</li>
                <li>Insomnia</li>
                <li>DBeaver</li>
                <li>Microsoft Suite</li>
            </ul>
        </div>

    </div>
</section>
  );
}