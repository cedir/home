import { Grid } from '@mui/material';
import React from 'react';
import CedirImg from './images/cedir-frente-noche.png';

function PhotoDescription() {
    return (
        <Grid container alignItems='center' style={ { backgroundColor: '#FAFAFA' } }>
            <Grid item md={ 6 }>
                <img style={ { width: '100%' } } src={ CedirImg } />
            </Grid>
            <Grid item md={ 6 } paddingLeft='3rem' paddingRight='12rem'>
                <h4 className='pacifico text-primary'>
                    <span className='pacifico text-muted'>Cedir</span>{' '}
                    Centro de Endoscopía digestiva de Rosario
                </h4>
                <div className='separator-2' />
                <p className='text-muted'>
                    En el año 2005 se crea el C.E.Di.R. CENTRO DE ENDOSCOPIA DIGESTIVA DE ROSARIO fundamentalmente enfocado al diagnóstico, prevención y tratamiento de enfermedades digestivas.
                    <br />
                    Comprometido con su objetivo y acompañando su crecimiento en el año 2010 se instala en Bv. Oroño 1564 con mayor infraestructura y avanzada tecnología que permite realizar estudios de alta complejidad, con mas de 35 especialistas en gastroenterología y especialidades vinculadas, equipos multidisciplinarios y permanente renovación e incorporación de instrumental médico que mejora resultados diagnósticos y terapéuticos.
                    <br />
                    Hoy con mas de 100.000 estudios endoscopicos realizados, con 35 diferentes técnicas, hacen de C.E.DI.R un centro dedicado exclusivamente y con la mayor complejidad en Rosario en zona de influencia.
                </p>
            </Grid>
        </Grid>
    );
}

export default PhotoDescription;
