import { useEffect, useState } from 'react'
import styles from './properties.module.scss'
import { 
         Typography, 
         Box,
         Button
         } from '@mui/material'
import DragDrop from './dragAndDrop'
import TextAttachment from './textAttachment'




const Properties = () => {
  const [image,setImage] = useState([])
  const [text,setText] = useState([])

  useEffect(()=> console.log(image, text), [image,text])

  const handleUpload = () => {

  }

  return (
    <>
        <div className={styles.bottomProp}>
            <Typography variant='h4'>Property Media</Typography>
            {/* Drap&Drop Image */}
            <DragDrop onImageUploadSuccess={(file) => setImage(file)}/>

            <Box mb={2} mt={4} className={styles.attachments}>
              <Typography variant='h5'>Attachments</Typography>
              <TextAttachment onTextUploadSuccess={file => setText(file)}/>
            </Box>
            <Button onClick={()=>{handleUpload()}}>Upload</Button>
        </div>
    </>
  )
}

export default Properties