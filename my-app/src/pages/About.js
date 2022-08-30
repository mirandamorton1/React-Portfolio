import React from 'react';



const styles = {
  about: {
    backgroundColor: "rgb(236, 180, 189)",
    paddingTop: 0,
    borderRadius: 10,
  },
  container: {
    borderRadius: 10,
  }
};

export default function About() {
  return (
    <section className="content" style={styles.about}>
      <div className="about">
        <div className="pic">
          <img className="pic" src={require(`../styles/images/headshot2.jpg`)} alt="Miranda" />
        </div>
        <div className="abouttext">
          <h1>About Me</h1>
          <p className="infoText">
            I am a web developer with a certficate in Full Stack Web Developement from the University of Central Florida. I am able to apply my masters degree in behavior analysis to build web apps with an intuitive UI. I have been described as highly organized and have strong communication skills. 
          </p>
          <p className="infoText">
          I'm knowledgeable  in many frontend and backend languages, responsive frameworks, and databases. I'm able to successfully work alone or with a team to come up with creative solutions to problems. 

          </p>
        </div>
      </div>
    </section>
  );
}