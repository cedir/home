import { Grid, Typography } from '@mui/material';
import React from 'react';
import './styles.css';

function InfoCards() {
    return (
        <Grid container>
            <Grid item xs={ 12 }><h3 className='pacifico'>Cedir, Centro de Endoscopía digestiva de Rosario</h3></Grid>
            <Grid item xs={ 12 }>
                <Typography color='text.secondary'>Prevención, diagnostico y tratamiento de enfermedades digestivas.</Typography></Grid>
            <Grid item xs={ 12 }>
                
            </Grid>
        </Grid>
    );
}

export default InfoCards;
