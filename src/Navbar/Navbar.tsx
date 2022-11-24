import Grid from '@mui/material/Grid';
import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import Logo from './logo.png';

function NavbarHome() {
    return (
        <Navbar expand='lg'>
            <Grid container justifyContent='center' alignItems='center' spacing={ 12 }>
                <Grid item>
                    <div>
                        <div>
                            <a href='/'>
                                <img style={ { height: '2.2rem' } } src={ Logo } />
                            </a>
                        </div>
                        <div style={ { fontSize: '11px', fontFamily: 'Roboto' } }>
                            Centro de Endoscopía Digestiva de Rosario
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <Navbar.Collapse id='navbarScroll'>
                        <Nav
                          className='me-auto my-2 my-lg-0 '
                          style={ { maxHeight: '100px' } }
                          navbarScroll
                        >
                            <Nav.Link style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } } href='#action1'>Inicio</Nav.Link>
                            <Nav.Link style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } } href='#action2'>Quienes Somos</Nav.Link>
                            <Nav.Link style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } } href='#action2'>Preparación para Estudios</Nav.Link>
                            <Nav.Link style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } } href='#action2'>Campañas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Grid>
                <Grid item>
                    <Button variant='primary' size='sm' style={ { color: 'white', border: '1px solid #248d8e', fontFamily: 'Roboto', fontWeight: '400', fontSize: '13px', padding: 'auto 15px' } }>
                        Dejanos tu consulta <i style={ { paddingLeft: 5 } } className='fa fa-hospital-o'/>
                    </Button>
                </Grid>
            </Grid>
        </Navbar>
    );
}

export default NavbarHome;
