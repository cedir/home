import { Grid } from '@mui/material';
import React from 'react'
import MiniBlog1 from './images/mini_blog_1.jpeg';
import MiniBlog2 from './images/mini_blog_2.png';
import MiniBlog3 from './images/mini_blog_3.jpg';
import TextEditor from './TextEditor';

function MultipleInfo({ edit }: MultipleInfoProps) {
    const blogs = [
        {
            titulo: 'JORNADA INTERNAS DE ENTRENAMIENTO INTENSIVO EN MANOMETRIA DE ALTA RESOLUCION IMPEDANCIOMETRIA Y PHMETRIA',
            descripcion: 'Evento dirigido por la Dra. Laura Sole referente a nivel Nacional e Internacional en el estudio de Motilidad del aparato digestivo. En estas jornadas, la Dra. realizara estudios de motilidad en distintas patologías digestivas utilizando dispositivos de alta resolución con los últimos avances tecnológicos.-',
            fecha: '07/07/2022',
            foto: MiniBlog1,
        },{
            titulo: 'NO ESPERES TENER SÍNTOMAS PARA HACER UNA CONSULTA',
            descripcion: 'Todavía estas a tiempo para prevenir el Cáncer de Colon',
            fecha: '09/05/2022',
            foto: MiniBlog2,
        },{
            titulo: 'NUEVA INCORPORACIÓN EN METODOLOGÍA DIAGNÓSTICA RELACIONADA A TRASTORNOS DE LA MOTILIDAD',
            descripcion: 'MANOMETRIA ESOFAGICA - ANORECTAL',
            fecha: '09/05/2022',
            foto: MiniBlog3,
        }
    ]

    return (
    <Grid container justifyContent='center'>
        <Grid container item md={ 10 } sx={ { paddingTop: '2rem', paddingBottom: '5rem' } }>
            <Grid container item md={ 6 }>
                <div>
                    <h4 className='font-raleway fw4'>Ultimas Novedades</h4>
                    <div className='separator' />
                </div>
                <Grid container>
                    {blogs.map(blog => <>
                        <Grid item md={ 2 }>
                            <img className="media-object" src={ blog.foto } style={ { maxWidth: '60px' } } />
                        </Grid>
                        <Grid item md={ 9 }>
                            <TextEditor
                              text={`<h5>${blog.titulo}</h5>`}
                              classNames='font-small2'
                              edit={ edit }
                            />
                            <TextEditor
                              text={`<p><i className="fa fa-calendar pr-10" />${ ` ${blog.fecha}` }</p>`}
                              classNames='text-secondary font-small'
                              edit={ edit }
                            />
                            <TextEditor
                              text={`<p>${ blog.descripcion }</p>`}
                              classNames='text-secondary font-small m-0'
                              edit={ edit }
                            />
					    	<a href='' className='font-small2'>Leer más<i className="fa fa-long-arrow-right pl-5" /></a>
                            <div className='separator' />
                        </Grid>
                    </>)}
                </Grid>
            </Grid>
            <Grid container item md={ 3 }>
                <h4 className='font-raleway fw4'>Unidades</h4>
                <div className='separator' />
    
            </Grid>
            <Grid container item md={ 3 }>
                <h4 className='font-raleway fw4'>Preguntas Frecuentes</h4>
                <div className='separator' />
                
            </Grid>

        </Grid>
    </Grid>
  )
}

interface MultipleInfoProps {
    edit?: boolean;
}

export default MultipleInfo;
