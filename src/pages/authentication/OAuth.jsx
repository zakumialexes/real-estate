import React from 'react'
import { Button, Divider, Grid,
          } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import styles from './oAuth.module.scss'

const OAuth = () => {
  return (
    <>
        <Divider sx={{marginBottom:"0.7rem",marginTop:'0.6rem'}}>Or</Divider>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Button sx={{padding:'12px 24px'}} size='large' className={`${styles.oAuth} ${styles.facebook}`} fullWidth><FontAwesomeIcon icon={faFacebookF}/> Facebook</Button>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Button sx={{padding:'12px 24px'}} size='large' className={`${styles.oAuth} ${styles.google}`} fullWidth><FontAwesomeIcon icon={faGoogle}/> Google</Button>
            </Grid>
        </Grid>
    </>
  )
}

export default OAuth