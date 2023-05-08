import { Grid, IconButton } from '@mui/material';
import React from 'react';
import Logo from './secciones/images/logo.cedir.small.png';
import { Facebook } from '@mui/icons-material';

function Pie() {
    return <Grid container justifyContent='center'>
        <Grid item md={ 3 }>
            <img src={ Logo }/>
            <p>
                Estamos para ayudarlo.
                <br />
                Si usted no cree haber encontrado en este sitio la respuesta
                que esperaba o el servicio que buscaba por favor contactase
                con nosotros.
            </p>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=100013245134188&amp;fref=ts'>
                <i className='fa fa-facebook social-media'/>
            </a>
            <a target='_blank' href='https://twitter.com/CEDIR3'>
                <i className='fa fa-twitter social-media'/>
            </a>
            <a target='_blank' href='https://www.instagram.com/cedir/'>
                <i className='fa fa-instagram social-media' style={ { fontSize: '1.2rem' } }/>
            </a>
        </Grid>
        <Grid item md={ 3 }>
            Hola
        </Grid>
        <Grid item md={ 3 }>
            Hola
        </Grid>
    </Grid>;
}

export default Pie;
