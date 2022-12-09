import { Grid } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

function Simple() {
    return (
        <Grid container justifyContent='center' sx={ { backgroundColor: '#373737' } }>
            <Grid item md={ 10 }>
                <Grid container justifyContent='center' alignItems='center' className='py-3'>
                    <Grid item md={ 8 } className='text-center text-white'>
                        <h2>ENCUENTRE SU MÉDICO</h2>
                        <Grid container alignItems='center' justifyContent='center'>
                            { ['Gastroenterólogos', 'Proctólogos', 'Hepatólogos', 'Médicos Clínicos'].map((med, id) => (<span key={ id }>
                                <Grid container item alignItems='center'>
                                    <i className='fa fa-circle text-primary' style={ { fontSize: '4px', paddingRight: '1rem' } }/>
                                    <span style={ { color: '#cdcdcd', paddingRight: '1.5rem' } }>
                                        { med }
                                    </span>
                                </Grid>
                            </span>)) }
                        </Grid>
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
