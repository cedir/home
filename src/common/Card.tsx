import { Card, CardContent } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

function PersonalCard({ title, icon, body, button, buttonIcon, important }: PersonalCardProps) {
    const centerClass = 'd-flex justify-content-center';
    const styles = important ? {
        card: 'pb-4 bg-primary text-white h-100',
        body: 'text-white',
        separator: 'separator-white',
        icon: 'bg-dark',
    } : {
        card: 'pb-4 h-100',
        body: 'text-secondary',
        separator: 'separator',
        icon: 'bg-primary',
    };
    return (
        <Card variant='outlined' className={ styles.card }>
            <CardContent>
                <div className={ `${centerClass} py-3` }>
                    <div className={ `circle ${styles.icon} ${centerClass} align-items-center` }>
                        <i className={ `fa ${icon} text-center py-auto fa-2x` } style={ { fontSize: '1.5rem', color: 'white' } } />
                    </div>
                </div>
                <h4 className='text-center' style={ { fontFamily: 'Raleway', fontWeight: 400 } }>{ title }</h4>
                <div className={ styles.separator }/>
                <p className={ `${styles.body} text-center` }>{ body }</p>
                {button ?
                    <div className={ centerClass }>
                        <Button variant='primary' size='sm' className='px-3 pl-4 py-2'>
                            <span style={ { paddingLeft: '.3rem', marginRight: '1rem' } }><b>{ button }</b></span>
                            { buttonIcon && <i className={ `fa ${buttonIcon}` } /> }
                        </Button>
                    </div> :
                    <div />
                }
            </CardContent>
        </Card>
    );
}

interface PersonalCardProps {
    title: string;
    icon: string;
    body: string;
    button?: string;
    buttonIcon?: string;
    important?: boolean;
}

export default PersonalCard;
