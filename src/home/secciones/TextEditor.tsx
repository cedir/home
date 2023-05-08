import { Done } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import RichTextEditor from 'react-rte';

function TextEditor({ text, classNames, edit }: TextEditorProps) {
    const [editorText, setEditorText] = useState(RichTextEditor.createValueFromString(text, 'html'));
    const [editorString, setEditorString] = useState(text);
    const [index, setIndex] = useState(0);
    const [editMode, setEditMode] = useState(false);
    
    useEffect(() => {
        const str = editorText.toString('html');
        setEditorString(str);
        setIndex(str.indexOf('>'));
    }, [editMode]);
    return (<>
        { !edit && parse(editorString.slice(0, index) + ` className='${classNames}'` + editorString.slice(index)) }
        { edit && !editMode && <div onClick={ () => setEditMode(true)} style={ edit ? { cursor: 'pointer' } : {} }>
            { parse(editorString.slice(0, index) + ` className='${classNames}'` + editorString.slice(index)) }
        </div>
        }
        { editMode && <div style={ { color: 'black' } }>
            <RichTextEditor value={ editorText } onChange={ setEditorText } />
            <IconButton onClick={ () => setEditMode(false) } color='primary'><Done /></IconButton>
            </div>
        }
    </>)
}

interface TextEditorProps {
    text: string,
    classNames: string,
    edit?: boolean,
    styles?: string,
}

export default TextEditor;
