import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Que es GPT-3" text="GPT-3 es una tecnología de procesamiento del lenguaje natural desarrollada por la empresa OpenAI. Es capaz de generar texto coherente y natural en respuesta a una pregunta o tema proporcionado por el usuario." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Las posibilidades están más allá de tu imaginación.</h1>
      <p>Explora la biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Un chatbot es un programa de computadora diseñado para interactuar con los usuarios mediante el uso de lenguaje natural en una conversación." />
      <Feature title="Base de conocimientos" text="Una Base de conocimientos es una base de datos o conocimientos que contiene información detallada y organizada acerca de un tema o tema específico. En términos simples, es una base de datos o sistema de gestión de información que almacena datos útiles para su posterior referencia." />
      <Feature title="Educación" text="La educación es un proceso de adquisición de conocimientos, habilidades, valores, principios y experiencias que se lleva a cabo en una institución específica, como una escuela, universidad o instituto técnico." />
    </div>
  </div>
);

export default WhatGPT3;