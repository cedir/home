import React, { useEffect, useState } from 'react';
import Primer from './images/1.jpg';
import Segundo from './images/2.png';
import Tercer from './images/3.jpeg';
import Cuarto from './images/4.jpg';
import { Carousel } from 'react-bootstrap';

function Slides() {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      image: Primer,
      title: 'Campaña de Prevención del Cáncer de Colon',
      descripcion: <p>Cumpliste 50 años?<br />Podes Prevenir el Cáncer de Colon</p>,
      url: '',
      color: 'black',
    },
    {
      image: Segundo,
      title: 'C.E.Di.R',
      descripcion: 'Miembro de la Organización Mundial de Endoscopia',
      url: '',
      color: 'white',
    },
    {
      image: Tercer,
      title: 'Endocápsula',
      descripcion: 'Novedoso método diagnóstico para enfermedades digestivas',
      url: '',
      color: 'black',
    },
    {
      image: Cuarto,
      title: 'C.E.Di.R',
      descripcion: <p>Un centro dedicado exclusivamente al diagnóstico y tratamiento<br />de enfermedades digestivas</p>,
      url: '',
      color: 'white',
    },
  ];

  const style = {
    descripcion: (color: string) => {
      const position = color === 'black' ? { left: '20%' } : {right: '20%'};
      return { top: '125px', color, ...position };
    },
    descripcionText: (fontWeight: string, color: string) =>
      ({ fontWeight, textAlign: color === 'white' ? 'right' : 'left' }),
    control: { backgroundColor: 'rgb(0,0,0,0.7)', height: '60px', width: '80px', marginTop: '295px' },
  }

  useEffect(() => {
    setTimeout(() => {setIndex(index + 1)}, 3600)
  }, []);

  return (
    <div className='carousel slide'>
      <div className='carousel-indicators'>
        { slides.map((_, i) => <button type='button' className={ i === index ? 'bullet active' : 'bullet' } onClick={ () => setIndex(i) } />) }
      </div>
      <div className='carousel-inner'>
        { slides.map((slide, i) => (
          <div className={ `carousel-item ${index === i ? 'active' : ''}` } style={ { maxHeight: '650px' } }>
            <img src={ slide.image } className='d-block w-100' />
            <div className={ `overlay-${slide.color === 'black' ? 'white' : 'black'}` }/>
            <section className='carousel-descripcion' style={ style.descripcion(slide.color) }>
              <h1 className='font-raleway' style={ style.descripcionText('200', slide.color) as any }>{ slide.title }</h1>
              <h4 className='font-raleway' style={ style.descripcionText('400', slide.color) as any }>{ slide.descripcion }</h4>
            </section>
          </div>
        )) }
      </div>
      <button className='carousel-control-prev' style={ style.control } type='button' onClick={ () => setIndex(index !== 0 ? index - 1 : slides.length - 1) }>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
      </button>
      <button className='carousel-control-next' style={ style.control } type='button' onClick={ () => setIndex(index !== slides.length - 1 ? index + 1 : 0) }>
        <span className='carousel-control-next-icon' aria-hidden='true' />
      </button>
    </div>
  );
}

export default Slides;
