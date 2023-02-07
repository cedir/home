import { Button, Grid } from '@mui/material';
import React from 'react';
import { FiEdit3 } from 'react-icons/fi';

function Seccion({ children }: SeccionProps) {
    return <div>
        <Grid container sx={ { position: 'absolute' } } flexDirection='row-reverse'>
            <Grid item>
                <Button variant='outlined' style={ { borderRadius: '25%' } }>
                    <FiEdit3 />
                </Button>
            </Grid>
        </Grid>
        {children}
    </div>;
}

interface SeccionProps {
    children: React.ReactNode;
}

export default Seccion;