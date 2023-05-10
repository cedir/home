import { Grid } from '@mui/material';
import React from 'react'
import MiniBlog1 from './images/mini_blog_1.jpeg';
import MiniBlog2 from './images/mini_blog_2.png';
import MiniBlog3 from './images/mini_blog_3.jpg';
import SeccionItem from '../SeccionItem';
import Slider1 from './images/slider_1.jpg'
import Slider2 from './images/slider_2.jpg'
import Slider3 from './images/slider_3.jpg'
import Slider4 from './images/slider_4.jpg'
import BlogResumen from './BlogResumen';
import AccordionInfo from './AccordionInfo';
import SliderBlog from './SliderBlog';

function MultipleInfo({ edit, ...props }: MultipleInfoProps) {
    const blogs = [
        {
            titulo: 'JORNADA INTERNAS DE ENTRENAMIENTO INTENSIVO EN MANOMETRIA DE ALTA RESOLUCION IMPEDANCIOMETRIA Y PHMETRIA',
            descripcion: 'Evento dirigido por la Dra. Laura Sole referente a nivel Nacional e Internacional en el estudio de Motilidad del aparato digestivo. En estas jornadas, la Dra. realizara estudios de motilidad en distintas patologías digestivas utilizando dispositivos de alta resolución con los últimos avances tecnológicos.-',
            fecha: '07/07/2022',
            imagen: MiniBlog1,
            link: '',
        },{
            titulo: 'NO ESPERES TENER SÍNTOMAS PARA HACER UNA CONSULTA',
            descripcion: 'Todavía estas a tiempo para prevenir el Cáncer de Colon',
            fecha: '09/05/2022',
            imagen: MiniBlog2,
            link: '',
        },{
            titulo: 'NUEVA INCORPORACIÓN EN METODOLOGÍA DIAGNÓSTICA RELACIONADA A TRASTORNOS DE LA MOTILIDAD',
            descripcion: 'MANOMETRIA ESOFAGICA - ANORECTAL',
            fecha: '09/05/2022',
            imagen: MiniBlog3,
            link: '',
        }
    ];

    const paneles = [
        {
            titulo: 'Videoendoscopia',
            descripcion: 'La endoscopía digestiva alta y baja se realiza bajo sedación analgésica permitiendo la visualización directa de esófago, estómago y cólon, con equipos de video endoscopio de última tecnología. <a>Unidades<i class="fa fa-long-arrow-right pl-5"/></a>'
        },{
            titulo: 'Endocapsula',
            descripcion: 'El nuevo método no invasivo para el estudio del tubo digestivo. La endocápsula posse una vídeo cámara, una antena transmisora de imágenes de alta resolución , un sistema de iluminación y dos baterías. .Emite dos imágenes por segundo que son captadas por receptores ubicados fuera del cuerpo del paciente. Unidades',
        },{
            titulo: 'Diagnostico pelviano',
            descripcion: 'La medicina, habitualmente avanza al ritmo que la sociedad de bienestar le marca. Debido a esto, al aumentar de esperanza de vida de la mujer , la atención recibida durante el embarazo, el postparto y la menopausia ha experimentado un mayor protagonismo. Unidades',
        },{
            titulo: 'Ecografia',
            descripcion: 'Departamento de ecografia C.E.Di.R. Nuestro centro cuenta con el más especializado sistema de imágenes en ecotomografía. Unidades',
        },{
            titulo: 'Ecoendoscopia',
            descripcion: 'Ultrasonografía endocópica, la nueva herramienta diagnóstica y terapéutica indispensable para definir y y tratar con mayor precisión lesiones del tubo digestivo. Unidades',
        },{
            titulo: 'TRATAMIENTO ENDOSCOPICO CON BALON INTRAGASTRICO PARA LA OBESIDAD',
            descripcion: 'El tratamiento endoscópico para obesidad consiste en la colocación por via endoscópica de un balón dentro de la cavidad gástrica por un tiempo determinado. Es un método utilizado en todo el mundo , aprobado por la mayoría de los organismos oficiales de control de salud y tiene como ventaja a diferencia de la cirugía bariatrica que no se trata de un procedimiento quirúrgico que modifica el organismo en forma permanente, si no por el contrario una vez terminado el tratamiento el balón se retira no quedando ningún tipo de secuela en el organismo. Unidades',
        },{
            titulo: 'Phmetria y Manometria',
            descripcion: 'Esta área fue desarrollada para el estudio de patología esofágica concerniente a la enfermedad del reflujo gastro esofágico como así también patologías del esfínter esofágico inferior. Unidades',
        },{
            titulo: 'Laboratorio Bioquimico',
            descripcion: 'Este laboratorio bioquímico además de realizar análisis sanguíneos especializados para detectar alteraciones de enfermedades digestivas, procesa muestras de alta complejidad para distintas enfermedades extra digestivas. Unidades',
        },
    ]
    const images = [{
        image: Slider1,
        descripcion: 'Las hemorroides son paquetes vasculares (venas) que se encuentran normalmente en el conducto anal y sirven para ayudar al esfínter anal con la contención del contenido dentro del intestino (almohadilla hemorroidal fisiológica).'
    }, {
        image: Slider2,
        descripcion: 'La constipación es un síntoma muy común de observar en nuestro medio.<br>Varias son las causas que producen constipación.'
    }, {
        image: Slider3,
        descripcion: 'Sin lugar a dudas esta es la pregunta más frecuente que recibimos los especialistas de aparto digestivo.'
    }, {
        image: Slider4,
        descripcion: 'Las hemorroides son dilataciones vasculares del canal anal, que producen una variedad de  síntomas, desde un leve sangrado que acompaña a las deposiciones, hasta dolor, ardor, prurito, prolapso y sangrados más severos y constantes.'
    }];

    return (
    <Grid container justifyContent='center'>
        <Grid container item md={ 10 } spacing={ 2 } sx={ { paddingTop: '2rem', paddingBottom: '5rem' } }>
            <Grid container item md={ 6 }>
                <SeccionItem edit={ edit } {...props} >
                    <div>
                        <h4 className='font-raleway fw4'>Ultimas Novedades</h4>
                        <div className='separator' />
                    </div>
                    { blogs.map(blog => <BlogResumen edit={ edit } blog={ blog } />) }
                </SeccionItem>
            </Grid>
            <Grid container item md={ 3 }>
                <SeccionItem edit={ edit } {...props} >
                    <div>
                        <h4 className='font-raleway fw4'>Unidades</h4>
                        <div className='separator' />
                    </div>
                    <AccordionInfo edit={ edit } paneles={ paneles } />
                </SeccionItem>
            </Grid>
            <Grid container item md={ 3 } justifyContent='center'>
                <h4 className='font-raleway fw4'>Preguntas Frecuentes</h4>
                <div className='separator' />
                <SliderBlog edit={ edit } blogs={ images } />
            </Grid>
        </Grid>
    </Grid>
  );
}

interface MultipleInfoProps {
    edit?: boolean;
}

export default MultipleInfo;
