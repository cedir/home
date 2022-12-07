import React from 'react';
import Seccion from './Seccion';
import InfoCards from './secciones/InfoCards';

function Homepage() {
    const secciones: React.ReactNode[] = [<InfoCards key={ 0 }/>];
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
