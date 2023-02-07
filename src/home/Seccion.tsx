import React from 'react';

function Seccion({ children }: SeccionProps) {
    return <div>
        {children}
    </div>;
}

interface SeccionProps {
    children: React.ReactNode;
}

export default Seccion;