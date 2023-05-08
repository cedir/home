import { Button, Grid, IconButton } from '@mui/material';
import RichTextEditor from 'react-rte';
import React, { useEffect, useState } from 'react';
import Card from '../../common/Card';
import './styles.scss';
import SeccionItem from '../SeccionItem';
import AddIcon from '@mui/icons-material/Add';
import { Done } from '@mui/icons-material';
import TextEditor from './TextEditor';

function InfoCards({ edit, ...props }: InfoCardsProps) {
    const cards = [{
        title: 'Quienes Somos',
        body: 'Conozca nuestro equipo. Toda la calidad medica en un solo lugar.',
        icon: 'fa-plus-square',
        button: 'Leer más',
        buttonIcon: 'fa-angle-double-right',
    },{
        title: 'Turnos',
        body: 'Podes solicitar un turno a traves de nuestros telefonos o enviandonos un mensaje.',
        icon: 'fa-hospital-o',
        button: 'Enviar mensaje',
        buttonIcon: 'fa-stethoscope',
    },{
        title: 'WhatsApp',
        body: 'Solicite turnos por WhatsApp a los números (+549341) 3538426 / (+549341) 6751535.',
        icon: 'fa-ambulance',
        important: true,
    },{
        title: 'Turnos',
        body: 'Podes solicitar un turno a traves de nuestros telefonos o enviandonos un mensaje.',
        icon: 'fa-clock-o',
    }];

    return (
        <Grid container justifyContent='center' className='py-4' style={ { backgroundColor: '#FAFAFA' } }>
            <Grid item xs={ 10 }>
                <TextEditor
                  text={ '<h4>Cedir, Centro de Endoscopía digestiva de Rosario</h4>' }
                  classNames='pacifico text-primary text-center'
                  edit={ edit }
                />
                <div className='separator' />
                <TextEditor
                  text={ '<p>Prevención, diagnóstico y tratamiento de enfermedades digestivas.</p>' }
                  classNames='text-secondary text-center pb-3'
                  edit={ edit }
                />
            </Grid>
            <Grid item xs={ 10 }>
                <Grid container alignItems='stretch' spacing={ 2 }>
                    { cards.map(card => (
                        <Grid item md={ 3 }>
                            <SeccionItem edit={ edit } {...props}>
                                <Card { ...card } edit={ edit } />
                            </SeccionItem>
                        </Grid>
                    )) }
                </Grid>
            </Grid>
            { edit && <Grid item md={ 1 } justifyContent='flex-end' sx={ { position: 'relative' } }>
                    <div className='icon-confirm'>
                        <AddIcon />
                    </div>
                </Grid>
            }
        </Grid>
    );
}

interface InfoCardsProps {
    edit?: boolean,
    adminMode?: boolean;
}

export default InfoCards;
