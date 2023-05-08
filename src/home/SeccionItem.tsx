import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function SeccionItem({ children, adminMode, edit }: SeccionItemProps) {
  return (
    <div className={ adminMode ? 'edit-section' : '' }>
        { adminMode && edit && <div className='icon-delete'>
            <DeleteIcon />
            </div>
        }
        {children}
    </div>
  )
}

interface SeccionItemProps {
    adminMode?: boolean;
    edit?: boolean;
    children?: any;
}

export default SeccionItem;
