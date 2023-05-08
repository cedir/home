import React from 'react';
import Logo from './logo.png';

function Brand() {
    return (
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
    );
}

export default Brand;
