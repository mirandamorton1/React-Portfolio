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

export default function About() {
  return (
    <section className ="container">
         <div className ="about">
            <div className="pic">
              <img className="pic" src={require(`../styles/images/headshot.jpg`)} alt="Miranda"/> 
            </div>
       <h1>About Me</h1>
        <p>
        I am a full-stack web developer..
        </p>
     </div>
    </section>
  );
}