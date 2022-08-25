import react, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: 'surf-report',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'surf-report',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'surf-report',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'surf-report',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'surf-report',
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                    project={project}
                    key={"project" + idx}
                    />
                ))}

            </div>
        </div>
    );
};

export default Portfolio;