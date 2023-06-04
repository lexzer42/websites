import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Mejora las desconfianzas al instante',
    text: '"Mejorar las desconfianzas al instante" podría usarlo como un lema o eslogan para promover la confianza y credibilidad del sitio. Podría significar que la página web es confiable y se preocupa por mejorar la relación con sus usuarios, disminuyendo las dudas y desconfianzas que puedan surgir durante la visita al sitio.',
  },
  {
    title: 'Conviértete en el activo atendido',
    text: '"Conviértete en el activo atendido" podría ser un eslogan para motivar a los usuarios a tomar acciones que les permitan obtener un mejor servicio o atención. ',
  },
  {
    title: 'Mensajes',
    text: ' podría ser interpretado como un mensaje contundente que enfatiza la importancia de tener un mensaje claro o definido para lograr una identidad efectiva.',
  },
  {
    title: 'Lorem Ipsum',
    text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">El futuro es ahora y solo necesitas darte cuenta. Da un paso hacia el futuro hoy. Haz que suceda.</h1>
      <p>Solicite acceso anticipado para comenzar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;