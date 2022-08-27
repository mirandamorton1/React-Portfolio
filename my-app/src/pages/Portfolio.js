import React, { useState } from 'react';
import Project from '../components/Project';

export default function Portfolio() {
  const [projects] = useState([
    {
        name: 'Backyard Jungle',
        img: require('../assets/images/jungle.jpg'),
        description: 'Express App',
        link: "https://dry-beach-49040.herokuapp.com/",
        repo: "https://github.com/Anastasia095/Backyard-Jungle"
    },
    {
        name: 'Date Night',
        description: 'JavaScript App',
        limg: require('../assets/images/date.jpg'),
        repo: "https://anastasia095.github.io/Date-Night/"
    },
    {
      name: 'Note Taker',
      img: require('../assets/images/notetaker.jpg'),
      description: 'JavaScript App',
      link: "https://powerful-taiga-50437.herokuapp.com/",
      repo: "https://github.com/mirandamorton1/User-Friendly-Note-Taker"
  },
    {
        name: 'Weather Dashboard',
        description: 'Javascript App',
        img: require('../assets/images/weather.jpg'),
        repo: "https://github.com/mirandamorton1/LiveWeatherDashboard"
    },
    {
        name: 'Day Planner',
        description: 'JavaScript App',
        img: require('../assets/images/planner.jpg'),
        repo: "https://github.com/mirandamorton1/PersonalizedWorkDayPlanner"
    },
    {
      name: 'Interview Quiz',
      description: 'JavaScript App',
      img: require('../assets/images/quiz.jpg'),
      repo: "https://github.com/mirandamorton1/Interview-Code-Quiz"
  },
]);
  return (
    <div>
      <div className="flex-row">
      <h1>Portfolio</h1>
      {projects.map((project, idx) => (
        <Project 
        project={project}
        key={"project" + idx}
        />
      ))}
      </div>
    </div>
  );
}