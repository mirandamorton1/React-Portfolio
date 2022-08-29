import React from 'react';

import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

function Footer() {
    return (
<footer id="contact">
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
        </footer>
    );
  }
  
  export default Footer;