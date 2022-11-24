import Grid from '@mui/material/Grid';
import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import NavLinks from './NavLinks';

function NavbarHome() {
    return (
        <Navbar expand='lg'>
            <Grid container justifyContent='center' alignItems='center' spacing={ 12 }>
                <Grid item>
                    
                </Grid>
                <Grid item>
                    <NavLinks />
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
