import React, { useCallback, useEffect, useState } from 'react'
import { Grid, 
         Button,
         List,
         ListItem,
         IconButton,
         ListItemText,
         Divider,
          } from '@mui/material'
import { useDropzone } from 'react-dropzone';
import styles from './textAttachment.module.scss';
import { v4 } from 'uuid'
import DeleteIcon from '@mui/icons-material/Delete'

function TextAttachment({onTextUploadSuccess}) {
    const [textFiles, setTextFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        if(acceptedFiles[0]){
            acceptedFiles.forEach( data => setTextFiles( prevFiles => [...prevFiles,{id:v4(), ...data} ]))
        }
        
    }, [])

    useEffect( () => onTextUploadSuccess(textFiles), [textFiles,onTextUploadSuccess])
    
    const {getRootProps, getInputProps, open, onDropRejected} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        accept: {'text/*': []}, 
        onDrop,
    });

    const handleTextDelete = (id) => {
        setTextFiles(prevTexts => prevTexts.filter( text => text.id !== id))
    }
  return (
    <Grid container my={1} spacing={2}>
        <Grid item lg={6} xs={12}>
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            {onDropRejected && <p>Only Text Files are allowed</p>}
            <Button variant='contained' className={styles.attachBtn} onClick={open}>
                Open File Dialog
            </Button>
      </div>
        </Grid>
        <Grid item lg={6} xs={12}>
            <List>
                {textFiles && textFiles.map( (text,idx) => (
                    <div key={idx}>
                        <ListItem sx={{padding:'5px 0px'}} secondaryAction={
                            <IconButton edge="end" onClick={()=>handleTextDelete(text.id)}>
                            <DeleteIcon />
                            </IconButton>
                        } disablePadding>
                            <ListItemText primary={text.path}/>
                        </ListItem>
                        <Divider></Divider>
                    </div>
                ))}   
            </List>
        </Grid>
    </Grid>
  )
}

export default TextAttachment