import { useState } from 'react'
import { Typography,
         Grid,
         TextField,
          } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import styles from './createListing.module.scss'



const CreateListing = () => {
  const [listing, setListing] = useState({
    propertyTitle:'',
    description:'',
    type:'',
    status:'',
    price:'',
    area:'',
    room:''
  })

  const handleChange = (e) => {
    setListing({...listing, [e.target.id]:[e.target.value]})
  }

  return (
    <div className={styles.createListing}>
      <Typography variant='h4'>Create Listing</Typography>
      <Grid my={2} spacing={2} container>
        <Grid item xs={12}>
          <TextField fullWidth label="Property Title" variant="outlined" onChange={handleChange} value={listing.propertyTitle} id="propertyTitle" />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize aria-label="Description" placeholder="Description" className={styles.textArea} style={{width:'100%'}} onChange={handleChange} id="description"  minRows={6}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Type" variant='outlined' onChange={handleChange} value={listing.type} id="type"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Status" variant='outlined' onChange={handleChange} value={listing.status} id="status"/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth label="Price" variant='outlined' onChange={handleChange} value={listing.price} id="price" type='number'/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth label="Area" variant='outlined' onChange={handleChange} value={listing.area} id="area"/>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth label="Room" variant='outlined' onChange={handleChange} value={listing.room} id="room" type='number'/>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateListing