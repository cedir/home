import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavLinks() {
    return (
        <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0 ' style={ { maxHeight: '100px' } } navbarScroll>
                <Nav.Link
                  style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } }
                  href='#action1'
                >
                    Inicio
                </Nav.Link>
                <Nav.Link
                  style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } }
                  href='#action2'
                >
                    Quienes Somos
                </Nav.Link>
                <Nav.Link
                  style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } }
                  href='#action2'
                >
                    Preparación para Estudios
                </Nav.Link>
                <Nav.Link
                  style={ { fontFamily: 'Raleway, sans-serif', padding: '1rem   2rem' } }
                  href='#action2'
                >
                    Campañas
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    );
}
