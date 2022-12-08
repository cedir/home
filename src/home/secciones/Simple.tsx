import { Grid } from '@mui/material';
import React from 'react';
import { Button, Table } from 'react-bootstrap';

function Simple() {
    return (
        <Grid container justifyContent='center' sx={ { backgroundColor: '#373737' } }>
            <Grid item md={ 10 }>
                <Grid container justifyContent='center' alignItems='center'>
                    <Grid item md={ 8 } className='text-center text-white'>
                        <h2>ENCUENTRE SU MÉDICO</h2>
                        <Table style={ { color: '#cdcdcd' } }>
                            <thead>
                                <th>Gastroenterólogos</th>
                                <th>Proctólogos</th>
                                <th>Hepatólogos</th>
                                <th>Médicos Clínicos</th>
                            </thead>
                        </Table>
                    </Grid>
                    <Grid item md={ 4 } className='text-center'>
                        <Button className='px-4 py-2'>
                            <span style={ { paddingRight: '1rem', fontSize: '1.1rem' } }>
                                <b>Más especialistas</b>
                            </span>
                            <i className='fa fa-search' />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Simple;
