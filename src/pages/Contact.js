import React from 'react';
// import ReactDOM from 'react-dom'

import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';


export default function Contact() {
  return (
    <section className="contactcontainer">
      <div className="contact">
        <div className="text">
          <h1 className="mAll">Contact Me!</h1>
            <img className="contactpic" src={require(`../styles/images/headshot2.jpg`)} alt="Miranda" />
          </div>
          <div className="contacticons">
            <div>
            <a href="mailto:miranda.morton1@gmail.com">
              <FaEnvelope size={'8rem'}  color={'black'}/>
            </a>
              <a href="https://github.com/mirandamorton1">
              <FaGithub size={'8rem'} color={'black'} margin={'10rem'}/>
            </a>
            <FaPhone size={'8rem'}/>(760)625-2576
            </div>
            
          </div>
        </div>

    </section>
  );
}