import { Grid } from '@mui/material';
import React from 'react';
import Card from '../../common/Card';
import './styles.scss';

function InfoCards() {
    return (
        <Grid container justifyContent='center' className='py-4' style={ { backgroundColor: '#FAFAFA' } }>
            <Grid item xs={ 10 }>
                <h4 className='pacifico text-center text-primary'>
                    Cedir, Centro de Endoscopía digestiva de Rosario
                </h4>
                <div className='separator' />
                <p className='text-secondary text-center pb-3'>
                    Prevención, diagnóstico y tratamiento de enfermedades digestivas.
                </p>
            </Grid>
            <Grid item xs={ 10 }>
                <Grid container alignItems='stretch' spacing={ 2 }>
                    <Grid item md={ 3 }>
                        <Card
                          title='Quienes Somos'
                          body='Conozca nuestro equipo. Toda la calidad medica en un solo lugar.'
                          icon='fa-plus-square'
                          button='Leer más'
                          buttonIcon='fa-angle-double-right'
                        />
                    </Grid>
                    <Grid item md={ 3 }>
                        <Card
                          title='Turnos'
                          body='Podes solicitar un turno a traves de nuestros telefonos o enviandonos un mensaje.'
                          icon='fa-hospital-o'
                          button='Enviar mensaje'
                          buttonIcon='fa-stethoscope'
                        />
                    </Grid>
                    <Grid item md={ 3 }>
                        <Card
                          title='WhatsApp'
                          body='Solicite turnos por WhatsApp a los números (+549341) 3538426 / (+549341) 6751535.'
                          icon='fa-ambulance'
                          important
                        />
                    </Grid>
                    <Grid item md={ 3 }>
                        <Card
                          title='Turnos'
                          body='Podes solicitar un turno a traves de nuestros telefonos o enviandonos un mensaje.'
                          icon='fa-clock-o'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default InfoCards;
