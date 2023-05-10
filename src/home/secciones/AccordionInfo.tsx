import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import React from 'react'
import TextEditor from './TextEditor';

function AccordionInfo({ paneles, edit }: AccordionInfoProps) {
    const [expanded, setExpanded] = React.useState<number>(-1);

    const handleChange =
        (panel: number) => (_: unknown, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : -1);
        };

    return (<>
    {paneles.map((panel, id) => 
        <Accordion
          expanded={ expanded === id } onChange={handleChange(id)}
          key={ panel.titulo }
          className='font-raleway'
          sx={ { width: '100%', marginTop: '.5rem' } }
        >
            <AccordionSummary
                sx={ { backgroundColor: expanded === id ? '#2AA4A5' : '#333333', color: 'white' } }
                expandIcon={ <ExpandMore sx={ { color: 'white' } }/> }
                onClick={ () => setExpanded(expanded === id ? -1 : id) }
            >
                <span>
                    <GroupsIcon sx={ { marginRight: '1rem' } }/>
                    <strong className='font-raleway'>{ panel.titulo }</strong>
                </span>
            </AccordionSummary>
            <AccordionDetails>
                <TextEditor
                    text={ panel.descripcion }
                    edit={ edit }
                />
            </AccordionDetails>
        </Accordion>
    )} </> )
}

interface Panel {
    titulo: string,
    descripcion: string
}

interface AccordionInfoProps {
    paneles: Panel[],
    edit?: boolean,
}

export default AccordionInfo;
