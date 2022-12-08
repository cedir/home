import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

function InfoCards() {
    return (
        <Grid container justifyContent='center'>
            <Grid item xs={ 10 }>
                <h4 className='pacifico text-center text-primary'>
                    Cedir, Centro de Endoscopía digestiva de Rosario
                </h4>
                <div className='separator' />
                <p className='text-secondary text-center'>
                    Prevención, diagnóstico y tratamiento de enfermedades digestivas.
                </p>
            </Grid>
            <Grid item xs={ 10 }>
                <Grid container>
                    <Grid item md={ 3 }>
                        <Card variant='outlined'>
                            <CardContent>
                                <h4 className='text-center' style={ { fontFamily: 'Raleway', fontWeight: 400 } }>Quienes Somos</h4>
                                <div className='separator' />
                                <p className='text-secondary'>Conozca nuestro equipo. Toda la calidad medica en un solo lugar.</p>
                                <Button variant='primary' size='sm' className='cedirbutton'>
                                    Leer más
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={ 3 }>

                    </Grid>
                    <Grid item md={ 3 }>

                    </Grid>
                    <Grid item md={ 3 }>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default InfoCards;
