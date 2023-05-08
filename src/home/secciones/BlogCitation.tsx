import { Grid } from '@mui/material';
import React from 'react'
import TextEditor from './TextEditor';
import SeccionItem from '../SeccionItem';
import Blog1 from './images/blog_1.jpg';
import Blog2 from './images/blog_2.jpg';
import Blog3 from './images/blog_3.jpg';
import Blog4 from './images/blog_4.jpg';

function BlogCitation({ edit }: BlogCitationProps) {
    const blogs = [
        {
            img: Blog1,
            title: 'Anemia de origen digestivo: Caso Clínico y metodología de estudio.',
            description: 'Paciente femenina de 66 años con anemia ferropenica y Somf (+) por test inmunológico .Asintomátic...'
        }
    ]
    return (
        <Grid container>
            <Grid item xs={ 12 }>
                <TextEditor
                text='<h4>Enfermedades Digestivas</h4>'
                classNames='text-center fw4 font-raleway'
                edit={ edit }
                />
                <div className='separator' />
                <TextEditor
                text='<h5>Conozca las enfermedades gastrointestinales más frecuentes.</h5>'
                classNames='text-secondary text-center font-raleway fw4'
                edit={ edit }
                />
            </Grid>
            <Grid container item md={ 12 }>
                <Grid item md={ 3 } sx={ { height: '380px', backgroundImage: `url(${Blog1})` } }>
                    <div style={ { display: 'flex', alignItems: 'center' } } >
                        <img src={ Blog1 } />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

interface BlogCitationProps {
    edit?: boolean;
}

export default BlogCitation;
