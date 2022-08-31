import React from 'react';

import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

function Footer() {
    return (
<footer id="contact">
<div className="footericons">
            <div>
            <a href="mailto:miranda.morton1@gmail.com">
              <FaEnvelope size={'2rem'}  color={'black'}/>
            </a>
              <a href="https://github.com/mirandamorton1">
              <FaGithub size={'2rem'} color={'black'} margin={'10rem'}/>
            </a>
            <FaPhone size={'2rem'}/>(760)625-2576
            </div>
            {/*to do: remove this comment*/}
          </div>
        </footer>
    );
  }
  
  export default Footer;