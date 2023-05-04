import React, { useState } from 'react';
import Seccion from './Seccion';
import InfoCards from './secciones/InfoCards';
import Simple from './secciones/Simple';
import PhotoDescription from './secciones/PhotoDescription';
import Slides from './secciones/Slides';
import BlogCitation from './secciones/BlogCitation';

function Homepage() {
    const secciones: React.ReactNode[] = [<Slides key={ 0 }/>, <InfoCards key={ 1 }/>, <Simple key={ 2 } />, <PhotoDescription key={ 3 } />];
    const [adminMode, setAdminMode] = useState(true);
    return (
        <>
            { secciones.map((sec, id) => (
                <Seccion key={ id } adminMode={ adminMode }>
                    {sec}
                </Seccion>
            )) }
        </>
    );
}

export default Homepage;
