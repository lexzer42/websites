import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Construyamos algo increíble con GPT-3 OpenAI.</h1>
      <p>La tecnología GPT-3 de OpenAI tiene el potencial de revolucionar la forma en que interactuamos con el lenguaje natural. En este proyecto, nos proponemos utilizar esta tecnología para crear una plataforma moderna de asistencia de viajes capaz de proporcionar información y recomendaciones personalizadas a los usuarios.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Su dirección de correo electrónico" />
        <button type="button">Empezar</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1.600 personas han solicitado acceso a nuestra página web.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;