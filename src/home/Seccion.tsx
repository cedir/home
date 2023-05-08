import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from '@mui/icons-material/Done';

function Seccion({ children, adminMode }: SeccionProps) {
    const [edit, setEdit] = useState(false);
    const [newChildren, setNewChildren] = useState(children);
    useEffect(() => {
        setNewChildren(React.cloneElement(children, { edit, adminMode }));
    }, [edit]);
    return <div className={ adminMode ? 'edit-section' : '' }>
        { adminMode && edit && <div className='icon-confirm' onClick={ () => setEdit(!edit) }>
            <DoneIcon />
            </div>
        }
        { adminMode && !edit && <div className='icon-pencil fade-in' onClick={ () => setEdit(!edit) }>
            <CreateIcon />
            </div>
        }
        {newChildren}
    </div>;
}

interface SeccionProps {
    children: any;
    adminMode: boolean;
}

export default Seccion;