import { Grid } from '@mui/material';
import React from 'react'
import TextEditor from './TextEditor';

function BlogResumen({ blog, edit }: BlogResumenProps) {
  return (<Grid container>
        <Grid item md={ 2 }>
            <img className="media-object" src={ blog.imagen } style={ { maxWidth: '60px' } } />
        </Grid>
        <Grid item md={ 9 }>
            <TextEditor
              text={`<h5>${blog.titulo}</h5>`}
              classNames='font-small2'
              edit={ edit }
            />
            <TextEditor
              text={`<p><i className="fa fa-calendar pr-10" />${ ` ${blog.fecha}` }</p>`}
              classNames='text-secondary font-small'
              edit={ edit }
            />
            <TextEditor
              text={`<p>${ blog.descripcion }</p>`}
              classNames='text-secondary font-small m-0'
              edit={ edit }
            />
            <a href='' className='font-small2'>Leer más<i className="fa fa-long-arrow-right pl-5" /></a>
            <div className='separator' />
        </Grid>
    </Grid>)
}

interface Blog {
    imagen: any,
    titulo: string,
    fecha: string,
    descripcion: string,
    link: string,
}

interface BlogResumenProps {
    blog: Blog,
    edit?: boolean,
}

export default BlogResumen;
