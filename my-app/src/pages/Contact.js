import React from 'react';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />
// ReactDOM.render(element, document.body)

// import { validateEmail } from '../../util/helpers';

// function Contact() {
//   const [formState, setFormState] = useState({

//   });

//   const handleSubmit = (e) => {

//   };

//   const handleChange = (e) => {

//   };

//   return (

//   );
// }

// export default Contact;

export default function Contact() {
  return (
    <section className="container">
      <div className="contact">
        <div className="text">
          <h1 className="mAll">Contact Me!</h1>
          <div className="mAll">
          <img className="mAll" src={require(`../styles/images/headshot.jpg`)} alt="Miranda" />
        </div>
        <div className="mAll">
        <a href="mailto:miranda.morton1@gmail.com">
                            <FontAwesomeIcon icon={["fas", "envelope-square"]} size="1x" color="#607d8b" />
                        </a> <a href="miranda.morton1@gmail.com">miranda.morton1@gmail.com</a>
                    </div>
                    <div className="mAll">
                        <div>
                            <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="1x" color="#607d8b" /> (760)625-2576

                        </div>
        </div>
        </div>
      </div>
    </section>
  );
}