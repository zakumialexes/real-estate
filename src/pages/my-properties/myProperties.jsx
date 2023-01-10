import React from 'react'
import FloorPlan from './floor-plan/floorPlan'
import PropertiesMedia from './properties-media/propertiesMedia'
import Typography from '@mui/material/Typography'
import './myProperties.scss'

const MyProperties = () => {
  return (
    <>
        <div className='myProperties'>
          <Typography className='myph4' variant='h4'>Add New Property</Typography>
          <Typography mt={2}>We are glad to see you again!</Typography>
        </div>
        <PropertiesMedia/>
        <FloorPlan/>
    </>
  )
}

export default MyProperties