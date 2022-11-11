import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from './logo.png';

function NavbarHome() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <div>
                    <div>
                        <a href='/'>
                            <img style={ { height: '2.2rem', margin: '0.2rem' } } src={ Logo } />
                        </a>
                    </div>
                    <div style={ { fontSize: '11px', fontFamily: 'Roboto' } }>
                        Centro de Endoscopía Digestiva de Rosario
                    </div>
                </div>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav
                      className='me-auto my-2 my-lg-0'
                      style={ { maxHeight: '100px' } }
                      navbarScroll
                    >
                        <Nav.Link href='#action1'>Inicio</Nav.Link>
                        <Nav.Link href='#action2'>Quienes Somos</Nav.Link>
                        <Nav.Link href='#action2'>Preparación para Estudios</Nav.Link>
                        <Nav.Link href='#action2'>Campañas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHome;
