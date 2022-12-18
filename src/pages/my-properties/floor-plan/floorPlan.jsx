import React, { useState } from 'react'
import { Typography,
         Grid,
         TextField,
         Button,
         Stack
          } from '@mui/material'
import styles from './floorPlan.module.scss'
import PlanImage from './planImage'

function FloorPlan() {
  const [floor,setFloor] = useState({
    description:'',
    bedrooms:'',
    price:'',
    postfix:'',
    size:'',
    images:[]
  })

  const floorImages = files => {
    setFloor({...floor,images:files})
  }

  const handleChange = (e) => {
    setFloor({...floor, [e.target.id]:[e.target.value]})
  }

  const handleSubmit = () =>{
    console.log('Floor Plan is' , floor)
  }

  return (
    <div className={styles.floorPlan}>
        <Typography variant='h4'>Floor Plan</Typography>
        <Grid my={2} container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth label="Plan Description" variant="outlined" onChange={handleChange} value={floor.description} id="description" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Plan Bedrooms" variant="outlined" onChange={handleChange} value={floor.bedrooms} id="bedrooms" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Plan Price" variant="outlined" onChange={handleChange} value={floor.price} id="price" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Price Postfix" variant="outlined" onChange={handleChange} value={floor.postfix} id="postfix" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Plan Size" variant="outlined" onChange={handleChange} value={floor.size} id="size" />
            </Grid>
            <Grid item xs={12}>
                <PlanImage onImageUploadSuccess={floorImages}/>
            </Grid>
            <Grid item xs={12}>
                <Stack direction='row' justifyContent='center'>
                    <Button onClick={handleSubmit} className={styles.fpBtn} variant='contained'>Submit</Button>
                </Stack>
            </Grid>
        </Grid>
    </div>
  )
}

export default FloorPlan