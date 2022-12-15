import { useState } from "react"

import { Container, TextField, Grid, Typography, Link, Button, FormGroup, FormControlLabel, Checkbox} from "@mui/material"
import styles from "./login.module.scss"
import OAuth from "./oAuth"

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const changeHandler = (e) => {
        setLogin((prevState) => {
            return { ...prevState, [e.target.id]: e.target.value }
        })
        console.log(login[e.target.id])
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(login)
    }

    return (
        <Container maxWidth="md">
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12} md={10} lg={6} sx={{ padding: "60px 0px" }}>
                    <Typography mb={2} variant="h3" className={styles.title} align="center">
                        Login to start learning
                    </Typography>
                    <Typography className={styles.changeRoute} mb={1} align="center">
                        Don't have an account?{" "}
                        <Link href="register" underline="none">
                            Register
                        </Link>
                    </Typography>
                    <form onSubmit={submitHandler}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            type="email"
                            id="email"
                            onChange={changeHandler}
                            value={login.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            onChange={changeHandler}
                            value={login.password}
                        />
                        <Grid container spacing={3}>
                            <Grid item xs>
                                    <FormGroup sx={{marginTop:'0.2rem'}}>
                                        <FormControlLabel
                                        control={<Checkbox id="instructor" onClick={changeHandler} />}
                                        label="Remember Me"/>
                                    </FormGroup>
                            </Grid>
                            <Grid item xs className={styles.forgotPassword}>
                                <Link href="forgotPassword" >Forgot Password?</Link>
                            </Grid>
                        </Grid>

                        
                        <Button
                            sx={{ marginTop: "0.6rem",padding:'12px 24px' }}
                            type="submit"
                            className={styles.confirmBtn}
                            size="large"
                            fullWidth
                            variant="outlined"
                        >
                            Login
                        </Button>
                        <OAuth></OAuth>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
