import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite acceso anticipado para comenzar</h4>
      <h1 className="gradient__text">Las posibilidades son <br /> 
más allá de tu imaginación</h1>
      <p>es una frase que invita a soñar en grande y a no poner límites a los objetivos y sueños.Se trata de una declaración positiva que sugiere que no hay límites para lo que se puede lograr y que todo es posible.</p>
      <h4>Solicite acceso anticipado para comenzar</h4>
    </div>
  </div>
);

export default Possibility;