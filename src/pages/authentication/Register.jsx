import { useState } from "react"

import {
    Container,
    TextField,
    Grid,
    Typography,
    Link,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material"
import styles from "./register.module.scss"
import OAuth from "./oAuth"

const Register = () => {
    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: "",
        confirm: "",
        instructor: false,
    })

    const changeHandler = (e) => {
        setRegister((prevState) => {
            return { ...prevState, [e.target.id]: e.target.value }
        })
        if (e.target.value === "on") {
            setRegister((prevState) => {
                return { ...prevState, [e.target.id]: true }
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(register)
    }

    return (
        <Container maxWidth="md">
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={12} md={10} lg={6} sx={{ padding: "60px 0px" }}>
                    <Typography mb={1} variant="h3" className={styles.title} align="center">
                        Register to start learning
                    </Typography>
                    <Typography className={styles.changeRoute} mb={1} align="center">
                        Have an account?{" "}
                        <Link href="login" underline="none">
                            Login
                        </Link>
                    </Typography>
                    <form onSubmit={submitHandler}>
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            label="Username"
                            id="username"
                            onChange={changeHandler}
                            value={register.username}
                        />
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            label="Email Address"
                            type="email"
                            id="email"
                            onChange={changeHandler}
                            value={register.email}
                        />
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            onChange={changeHandler}
                            value={register.password}
                        />
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            id="confirm"
                            onChange={changeHandler}
                            value={register.confirm}
                        />
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox id="instructor" onClick={changeHandler} />}
                                label="Want to become an instructor?"
                            />
                        </FormGroup>
                        <Button
                            sx={{ marginTop: "4px" }}
                            type="submit"
                            className={styles.confirmBtn}
                            size="large"
                            fullWidth
                            variant="outlined"
                        >
                            Register
                        </Button>
                        <OAuth></OAuth>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Register
