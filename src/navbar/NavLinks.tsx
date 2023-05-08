import React, { CSSProperties } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavLinks({ links }: NavLinksProps) {
    const style: StyleObject = {
        navLink: { fontFamily: 'Raleway, sans-serif', padding: '1rem 2rem', fontSize: '1.05rem' },
        nav: { maxHeight: '100px' },
    };
    return (
        <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0 ' style={ style.nav } navbarScroll>
                {links.map(link => (
                    <Nav.Link
                      style={ style.navLink }
                      href='#action1'
                      key={ link }
                    >
                        { link }
                    </Nav.Link>
                ))}
            </Nav>
        </Navbar.Collapse>
    );
}

interface StyleObject {
    [key: string]: CSSProperties,
}

interface NavLinksProps {
    links: string[];
}

export default NavLinks;
