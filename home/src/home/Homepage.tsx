import React, { useState } from 'react';
import Seccion from './Seccion';
import InfoCards from './secciones/InfoCards';
import Simple from './secciones/Simple';
import PhotoDescription from './secciones/PhotoDescription';
import Slides from './secciones/Slides';
import BlogCitation from './secciones/BlogCitation';

function Homepage({ adminMode }: HomepageProps) {
    const secciones: React.ReactNode[] = [<Slides key={ 0 }/>, <InfoCards key={ 1 }/>, <Simple key={ 2 } />, <PhotoDescription key={ 3 } />, <BlogCitation key={ 4 } />];
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

interface HomepageProps {
    adminMode: boolean;
}

export default Homepage;
