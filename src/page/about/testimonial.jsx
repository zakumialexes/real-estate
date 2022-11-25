import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import testimonialPerson from "../../assets/testimonial/testimonialPerson.png"
import aboutStyle from "./about.module.scss"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const [data, setData]=useState()

    useEffect(()=>{
        fetch("http://localhost:3500/testimonial?")
        .then(response=>response.json())
        .then(data=>{setData(data)})
    },[])

    return (

        <Stack sx={{ backgroundColor: '#1d293eb2', padding: '50px 0' }}>
            <Stack spacing={1} sx={{ alignItems: 'center', }}>
                <Typography
                    variant='h1'
                    sx={{
                        fontSize: '1.7rem',
                        letterSpacing: '1px',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}
                >Testimonials</Typography>
                <Typography variant='subtitle1'>Here could be a nice sub title</Typography>
            </Stack>
            <Slider {...settings}>
                {data?.map((data) => (
                    <Stack key={data.id} spacing={3} sx={{ alignItems: 'center', }}>
                        <Stack alignItems='center'>

                            <Box sx={{ position: 'relative', margin: '50px 0' }}>
                                <img
                                    src={testimonialPerson}
                                    alt='testimonials img'
                                    className={aboutStyle.testimonial_img}
                                />
                                <FontAwesomeIcon icon={faQuoteLeft} className={aboutStyle.quote} />
                            </Box>

                            <Typography variant='h1'
                                sx={{
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    marginBottom: '10px',
                                }}>{data.name}</Typography>
                            <Typography
                                variant='subtitle1'
                                sx={{
                                    fontSize: '0.9rem',
                                }}>
                                {data.role}
                            </Typography>
                            <Typography
                                variant='body1'
                                paddingLeft="15px"
                                sx={{
                                    fontSize: '0.9rem',
                                    marginTop: '30px',
                                }}>
                                {data.subTitle}
                            </Typography>
                        </Stack>
                    </Stack>
                ))}
            </Slider>
        </Stack>
    )
}
