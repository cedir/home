import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material';
import React from 'react'
import MiniBlog1 from './images/mini_blog_1.jpeg';
import MiniBlog2 from './images/mini_blog_2.png';
import MiniBlog3 from './images/mini_blog_3.jpg';
import TextEditor from './TextEditor';
import SeccionItem from '../SeccionItem';
import { ExpandMore } from '@mui/icons-material';

function MultipleInfo({ edit, ...props }: MultipleInfoProps) {
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
    ];

    const paneles = [
        {
            title: 'Videoendoscopia',
            descripcion: 'La endoscopía digestiva alta y baja se realiza bajo sedación analgésica permitiendo la visualización directa de esófago, estómago y cólon, con equipos de video endoscopio de última tecnología. <a>Unidades<i class="fa fa-long-arrow-right pl-5"/></a>'
        },{
            title: 'Endocapsula',
            descripcion: 'El nuevo método no invasivo para el estudio del tubo digestivo. La endocápsula posse una vídeo cámara, una antena transmisora de imágenes de alta resolución , un sistema de iluminación y dos baterías. .Emite dos imágenes por segundo que son captadas por receptores ubicados fuera del cuerpo del paciente. Unidades',
        },{
            title: 'Diagnostico pelviano',
            descripcion: 'La medicina, habitualmente avanza al ritmo que la sociedad de bienestar le marca. Debido a esto, al aumentar de esperanza de vida de la mujer , la atención recibida durante el embarazo, el postparto y la menopausia ha experimentado un mayor protagonismo. Unidades',
        },{
            title: 'Ecografia',
            descripcion: 'Departamento de ecografia C.E.Di.R. Nuestro centro cuenta con el más especializado sistema de imágenes en ecotomografía. Unidades',
        },{
            title: 'Ecoendoscopia',
            descripcion: 'Ultrasonografía endocópica, la nueva herramienta diagnóstica y terapéutica indispensable para definir y y tratar con mayor precisión lesiones del tubo digestivo. Unidades',
        },{
            title: 'TRATAMIENTO ENDOSCOPICO CON BALON INTRAGASTRICO PARA LA OBESIDAD',
            descripcion: 'El tratamiento endoscópico para obesidad consiste en la colocación por via endoscópica de un balón dentro de la cavidad gástrica por un tiempo determinado. Es un método utilizado en todo el mundo , aprobado por la mayoría de los organismos oficiales de control de salud y tiene como ventaja a diferencia de la cirugía bariatrica que no se trata de un procedimiento quirúrgico que modifica el organismo en forma permanente, si no por el contrario una vez terminado el tratamiento el balón se retira no quedando ningún tipo de secuela en el organismo. Unidades',
        },{
            title: 'Phmetria y Manometria',
            descripcion: 'Esta área fue desarrollada para el estudio de patología esofágica concerniente a la enfermedad del reflujo gastro esofágico como así también patologías del esfínter esofágico inferior. Unidades',
        },{
            title: 'Laboratorio Bioquimico',
            descripcion: 'Este laboratorio bioquímico además de realizar análisis sanguíneos especializados para detectar alteraciones de enfermedades digestivas, procesa muestras de alta complejidad para distintas enfermedades extra digestivas. Unidades',
        },
    ]

    return (
    <Grid container justifyContent='center'>
        <Grid container item md={ 10 } sx={ { paddingTop: '2rem', paddingBottom: '5rem' } }>
            <Grid container item md={ 6 }>
                <SeccionItem edit={ edit } {...props} >
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
                </SeccionItem>
            </Grid>
            <Grid container item md={ 3 }>
                <SeccionItem edit={ edit } {...props} >
                    <div>
                        <h4 className='font-raleway fw4'>Unidades</h4>
                        <div className='separator' />
                    </div>
                    { paneles.map(panel => (
                        <Accordion
                          key={ panel.title }
                          className='font-raleway'
                          sx={ { width: '100%' } }
                        >
                            <AccordionSummary sx={ { backgroundColor: '#333333', color: 'white' } } expandIcon={ <ExpandMore sx={ { color: 'white' } }/> } >
                                <i className="icon-users-1 pr-10" />
                                { panel.title }
                            </AccordionSummary>
                            <AccordionDetails>
                                { panel.descripcion }
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </SeccionItem>
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
