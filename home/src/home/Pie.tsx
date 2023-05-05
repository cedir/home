import { Grid, IconButton, TextField } from '@mui/material';
import React from 'react';
import Logo from './secciones/images/logo.cedir.small.png';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Pie() {
    const cedirPos = { lat: -32.952996, lng: -60.655827 };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCBbTmcpoE99M9ZPGVI8A4s4JzEFxxWdFs"
    });

    return <Grid container justifyContent='center' sx={ { paddingBottom: '10rem', backgroundColor: '#FAFAFA' } }>
        <Grid container item md={ 10 } spacing={ 2 } sx={ { paddingTop: '4rem' } }>
            <Grid item md={ 8 } sx={ { paddingBottom: '1rem' } }>
                <img src={ Logo } style={ { maxHeight: '35px' } }/>
            </Grid>
            <Grid item md={ 4 }>
                <h4 className='fw4 font-raleway'>Contactenos</h4>
            </Grid>
            <Grid item md={ 4 } sx={ { fontSize: '14px', paddingRight: '2rem' } }>
                <p className='text-secondary'>
                    Estamos para ayudarlo.
                    <br />
                    Si usted no cree haber encontrado en este sitio la respuesta
                    que esperaba o el servicio que buscaba por favor contactase
                    con nosotros.
                </p>
                <a target='_blank' href='https://www.facebook.com/profile.php?id=100013245134188&amp;fref=ts' style={ { paddingRight: '0.4rem' } }>
                    <i className='fa fa-facebook social-media' style={ { fontSize: '1.2rem' } }/>
                </a>
                <a target='_blank' href='https://twitter.com/CEDIR3' style={ { paddingRight: '0.4rem' } }>
                    <i className='fa fa-twitter social-media' style={ { fontSize: '1.2rem' } }/>
                </a>
                <a target='_blank' href='https://www.instagram.com/cedir/'>
                    <i className='fa fa-instagram social-media' style={ { fontSize: '1.2rem' } }/>
                </a>
                <ul className='list-icons' style={ { marginTop: '2rem' } }>
                    <li><i className='fa fa-map-marker pr-10'></i> Bv. Oroño 1564 - Rosario - Santa Fe</li>
                    <li><a href='tel:+543414499536'><i className='fa fa-phone pr-10'></i> +54 0341 4499536</a></li>
                    <li><a href='tel:+543414491184'><i className='fa fa-phone pr-10'></i> +54 0341 4491184</a></li>
                    <li><a href='tel:+543414472459'><i className='fa fa-phone pr-10'></i> +54 0341 4472459</a></li>
                    <li><a href='tel:+543416751535'><i className='fa fa-whatsapp pr-10' aria-hidden='true'></i> +54 341 6751535</a> | <a href='tel:+543413538426'>+54 341 3538426</a></li>
                    <li><a href='mailto:recepcion@cedir.com.ar'><i className='fa fa-envelope-o pr-10'></i>recepcion@cedir.com.ar</a></li>
                </ul>
            </Grid>
            <Grid item md={ 4 } sx={ { textAlign: 'center' } }>
            { isLoaded && (
                <GoogleMap
                  mapContainerStyle={ { width: '360px', height: '300px' } }
                  center={ cedirPos }
                  zoom={ 15 }
                  onLoad={(_: any) => {}}
                  onUnmount={(_: any) => {}}
                >
                    <Marker position={ cedirPos } />
                </GoogleMap>
            ) }
            </Grid>
            <Grid item md={ 4 }>
                <TextField
                  sx={ { paddingBottom: '1rem', width: '100%' } }
                  size='small'
                  id='nombre'
                  label='Nombre'
                  variant='outlined'
                />
                <TextField
                  sx={ { paddingBottom: '1rem', width: '100%' } }
                  size='small'
                  id='correo'
                  label='Correo electronico'
                  variant='outlined'
                />
                <TextField
                  sx={ { paddingBottom: '1rem', width: '100%' } }
                  size='small'
                  id='telefono'
                  label='Telefono de contacto'
                  variant='outlined'
                />
                <TextField
                  sx={ { paddingBottom: '1rem', width: '100%' } }
                  size='small'
                  id='mensaje'
                  label='Mensaje'
                  multiline
                  rows={ 6 }
                  variant='outlined'
                />
            </Grid>
        </Grid>
    </Grid>;
}

export default Pie;

// -32.952996, -60.655827