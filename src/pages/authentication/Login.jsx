import { useState } from 'react'


import { Container, 
         TextField,
         Grid, 
         Typography, 
         Link,
         Button } from '@mui/material'
import styles from "./login.module.scss"
import OAuth from './OAuth'

const Login = () => {
  const [login, setLogin] = useState({
    email:'',
    password:'',
  })

  const changeHandler = e => {
    setLogin( prevState => {
      return {...prevState, [e.target.id]: e.target.value}
    })
    console.log(login[e.target.id])
  }

  const submitHandler = e => {
    e.preventDefault()
    console.log(login)
  }

  return (
    <Container maxWidth="md">
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={12} md={10} lg={6} sx={{padding:"60px 0px"}}>
              <Typography mb={1} variant='h3' className={styles.title} align="center">Login to start learning</Typography>
              <Typography className={styles.changeRoute} mb={1} align="center">Don't have an account? <Link underline="none">Register</Link></Typography>
              <form onSubmit={submitHandler}>
                <TextField margin='dense' required fullWidth label="Email Address" type="email" id="email" onChange={changeHandler} value={login.email} />
                <TextField margin='dense' required fullWidth label="Password" type="password" id="password" onChange={changeHandler} value={login.password} />
                <Button sx={{marginTop:"6px"}} type='submit' className={styles.confirmBtn} size="large" fullWidth variant="outlined">Login</Button>
                <OAuth></OAuth>
              </form>
          </Grid>
        </Grid>
    </Container>
  )
}

export default Login