import { Grid, TextField } from '@mui/material';
import React from 'react';
import Logo from './secciones/images/logo.cedir.small.png';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import TextEditor from './secciones/TextEditor';

function Pie({ edit }: PieProps) {
    const cedirPos = { lat: -32.952996, lng: -60.655827 };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCBbTmcpoE99M9ZPGVI8A4s4JzEFxxWdFs"
    });

    const contactos = [
        { text: '<span>+54 0341 4499536</span>', href: 'tel:+543414499536', icono: 'fa fa-phone pr-10' },
        { text: '<span>+54 0341 4491184</span>', href: 'tel:+543414491184', icono: 'fa fa-phone pr-10' },
        { text: '<span>+54 0341 4472459</span>', href: 'tel:+543414472459', icono: 'fa fa-phone pr-10' },
        { text: '<span>+54 0341 6751535</span>', href: 'tel:+543416751535', icono: 'fa fa-whatsapp pr-10' },
        { text: '<span>+54 0341 3538426</span>', href: 'tel:+543413538426', icono: 'fa fa-whatsapp pr-10' },
        { text: '<span>recepcion@cedir.com.ar</span>', href: 'mailto:recepcion@cedir.com.ar', icono: 'fa fa-envelope-o pr-10' }
    ]
    const fields = [
        { id: 'nombre', label: 'Nombre' },
        { id: 'correo', label: 'Correo electronico' },
        { id: 'telefono', label: 'Telefono de contacto' },
        { id: 'mensaje', label: 'Mensaje', multiline: true, rows: 4 },
    ];

    return <Grid container justifyContent='center' sx={ { paddingBottom: '10rem', backgroundColor: '#FAFAFA' } }>
        <Grid container item md={ 10 } spacing={ 2 } sx={ { paddingTop: '4rem' } }>
            <Grid item md={ 8 } sx={ { paddingBottom: '1rem' } }>
                <img src={ Logo } style={ { maxHeight: '35px' } }/>
            </Grid>
            <Grid item md={ 4 }>
                <h4 className='fw4 font-raleway'>Contactenos</h4>
            </Grid>
            <Grid item md={ 4 } sx={ { fontSize: '14px', paddingRight: '2rem' } }>
                <TextEditor
                  text='<p>
                        Estamos para ayudarlo.
                        <br />
                        Si usted no cree haber encontrado en este sitio la respuesta
                        que esperaba o el servicio que buscaba por favor contactase
                        con nosotros.
                        </p>'
                  classNames='text-secondary'
                  edit={ edit }
                />
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
                    <li><i className='fa fa-map-marker pr-10 custom-primary-color'/> Bv. Oroño 1564 - Rosario - Santa Fe</li>
                    { contactos.map(contacto => <li key={ contacto.text }>
                        <div className='custom-primary-color' style={ { cursor: 'pointer' } } onClick={ !edit ? (() => window.open(contacto.href)) : (() => {}) }>
                            <i className={ contacto.icono } /> <span><TextEditor edit={ edit } text={ contacto.text } /></span>
                        </div>
                    </li>
                    ) }
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
                {fields.map(field => <TextField
                  sx={ { paddingBottom: '1rem', width: '100%' } }
                  key={ field.id }
                  size='small'
                  id={ field.id }
                  label={ field.label }
                  multiline={ field.multiline }
                  rows={ field.rows }
                  variant='outlined'
                />)}
            </Grid>
        </Grid>
    </Grid>;
}

interface PieProps {
    edit?: boolean;
}

export default Pie;
