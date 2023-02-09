import React from 'react';
import Seccion from './Seccion';
import InfoCards from './secciones/InfoCards';
import Simple from './secciones/Simple';
import PhotoDescription from './secciones/PhotoDescription';

function Homepage() {
    const secciones: React.ReactNode[] = [<InfoCards key={ 0 }/>, <Simple key={ 1 } />, <PhotoDescription key={ 2 } />];
    return (
        <>
            { secciones.map((sec, id) => (
                <Seccion key={ id }>
                    {sec}
                </Seccion>
            )) }
        </>
    );
}

export default Homepage;
