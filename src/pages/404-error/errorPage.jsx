import React from "react"
import { useRouteError, useNavigate } from "react-router-dom"

import { Container, Grid, Typography, Button } from "@mui/material"
import styles from "./errorPage.module.scss"
import errorImage from "../../assets/404error/error.png"

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    console.log(error)

    function clickHandler() {
        navigate("/home")
    }

    return (
        <div className={styles.error404box}>
            <Container maxWidth="md">
                <Grid container direction="column" rowSpacing={3} justifyContent="center" alignItems="center">
                    <Grid xs={6} md={8} item>
                        <img src={errorImage} alt="" />
                    </Grid>
                    <Grid sx={{ marginTop: "2rem" }} item>
                        <Typography variant="h1">Ohh! Page Not Found</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>We can’t seem to find the page you’re looking for</Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={clickHandler} variant="contained" className={styles.errorBtn}>
                            Back To Home
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ErrorPage
