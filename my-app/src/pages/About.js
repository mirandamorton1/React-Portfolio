import React from 'react';



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
    backgroundColor: "blue",
    paddingTop: 0,
    borderRadius: 20,
  },
  container: {
    borderRadius: 10,
  }
};

export default function About() {
  return (
    <section className="container" style={styles.about}>
      <div className="about">
        <div className="pic">
          <img className="pic" src={require(`../styles/images/headshot2.jpg`)} alt="Miranda" />
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p className="infoText">
            I am a web developer with a certficate in Full Stack Web Developement from the University of Central Florida. I am able to apply my masters degree in behavior analysis to build web apps with an intuitive UI - strong communiation skills??? 
          </p>
          <p className="infoText">
            I am a well versed in HTLM, CSS, JavaScript and am able to work 
          </p>
        </div>
      </div>
    </section>
  );
}