import {useCallback, useState, useEffect} from 'react'
import styles from './planImage.module.scss'
import { Button, ImageList, ImageListItem, Grid } from '@mui/material'
import { v4 } from 'uuid'
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'



const PlanImage = ({onImageUploadSuccess}) => {
    const [images, setImage] = useState([])
    const [previews, setPreviews] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
        if(acceptedFiles[0]){
            const reader = new FileReader()
            acceptedFiles.forEach( data => {
              reader.onload = () => {
                const id = v4()
                setImage( prevData => [...prevData,{id,...data}])
                setPreviews( prevData => [...prevData,{data, preview:reader.result,id}])
              }
              reader.readAsDataURL(data)
            })
        }
    }, [])
    

    useEffect( () => onImageUploadSuccess(images), [images,onImageUploadSuccess])

    const {getRootProps, getInputProps, open, onDropRejected} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        accept: {'image/*': []}, 
        onDrop,
    });


    const handlePreTrash = (id) => {
        setImage(preData => preData.filter(filterData => filterData.id !== id))
        setPreviews(preData => preData.filter(filterData => filterData.id !== id))
    }


  return (
    <div className={styles.planImage}>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                        {onDropRejected && <p>Only Image Files are allowed</p>}
                    <Button className={styles.uploadBtn} variant='contained' onClick={open}>
                        Upload Plan Image
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} lg={9}>
                <ImageList sx={{ width: '100%',marginTop:'20px' }} cols={4} rowHeight={200}>
                {previews.map( (item,idx) => {
                return (
                    <ImageListItem className={styles.prevImgBox} key={idx}>
                    <img
                        src={item.preview}
                        srcSet={item.preview}
                        alt={item.path}
                    />
                    <FontAwesomeIcon onClick={() => handlePreTrash(item.id)} icon={faTrashCan}/>
                    </ImageListItem>
                    )
                    })}
                </ImageList>
            </Grid>
        </Grid>
    </div>
  )
}

export default PlanImage