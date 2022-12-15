import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { v4 } from 'uuid';

import styles from './properties.module.scss'
import { ImageList, 
         Typography, 
         ImageListItem,
         Box
         } from '@mui/material'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Properties = () => {
  const [images,setImage] = useState([])
  const [previews,setPreviews] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    if(acceptedFiles[0]){
        const reader = new FileReader()
        acceptedFiles.map( data => {
          reader.onload = () => {
            const id = v4()
            setImage( prevData => [...prevData,{id,data}])
            setPreviews( prevData => [...prevData,{data, preview:reader.result,id}])
          }
          reader.readAsDataURL(data)
        })
    }
  }, [])

  //React drop-zone
  const { 
         getRootProps, 
         getInputProps,
         isDragAccept,
         isDragReject,
         isDragActive} = useDropzone({
    accept: {'image/*': []}, onDrop
  });

  const handlePreTrash = (id) => {
    setImage(preData => preData.filter(filterData => filterData.id !== id))
    setPreviews(preData => preData.filter(filterData => filterData.id !== id))
  }

  return (
    <>
        <div className={styles.bottomProp}>
            <Typography variant='h4'>Property Media</Typography>
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
            <Box my={2} mx='auto' className={styles.dropzone}>
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                  {isDragAccept && (<p>All files with image type will be accepted.</p>)}
                  {isDragReject && (<p>Some files will be rejected</p>)}
                  {!isDragActive && (<p>Drag and drop images here</p>)}
              </div>
            </Box>
        </div>
    </>
  )
}

export default Properties