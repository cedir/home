import { Grid } from '@mui/material';
import React from 'react';
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
            <Grid item xs={ 12 }>
            </Grid>
            <Grid item xs={ 12 }>
                
            </Grid>
        </Grid>
    );
}

export default InfoCards;
