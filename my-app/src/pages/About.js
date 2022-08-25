import React from 'react';
import Footer from '../components/Footer'


// const About = () => {
//     return (
//         <><div className="content">
//             <h1>
//                 Miranda Morton
//             </h1>
//         </div><p> this is some text about me</p></>
//     )
// }

// export default About
const styles = {
  about: {
    backgroundColor: "lightblue",
    paddingTop: 0,
  }
};

export default function About() {
  return (
    <><section className="container" style={styles.about}>
      <div className="about">
        <div className="pic">
          <img className="pic" src={require(`../styles/images/headshot.jpg`)} alt="Miranda" />
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p>
            I am a full-stack web developer..
          </p>
        </div>
      </div>
    </section><Footer/></>
  );
}