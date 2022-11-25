import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/system'
import { Grid, Typography, Link, Card, Modal } from '@mui/material'
import aboutStyle from "./about.module.scss"
import { Testimonial } from './testimonial'

//Icons
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest, faDribbble, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

//Slide
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Images
import Mission from "../../assets/about/mission.jpg"
import CompanyName from "../../assets/partners/1.png"
import Cityscape from "../../assets/partners/2.png"
import RealEstate from "../../assets/partners/3.png"
import Trustesta from "../../assets/partners/4.png"
import RealE from "../../assets/partners/5.png"

export const About = () => {

  const [cardData, setCardData] = useState()

  useEffect(() => {
    fetch("http://localhost:3500/OurTeam?")
      .then(response => response.json())
      .then(data => setCardData(data))
  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 800,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Custom Arrow
  function SampleNextArrow({ onClick }) {
    return (
      <div>
        <button
          className={aboutStyle.nextBtn}
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div>
        <button
          className={aboutStyle.preBtn}
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} /></button>
      </div>
    );
  }

  return (
    <Stack>
      <Box
        className={aboutStyle.container}
        sx={{
          display: "flex",
          justifyContent: 'center',
          marginTop: '25px',
          padding: '10px 70px'
        }}
      >
        <Box xs={12} md={12}>
          <Typography variant='h1'
            sx={{
              fontSize: '32px',
              fontWeight: '700',
            }}
            className={aboutStyle.title}
          >Our Mission Is To FindHouse</Typography>
        </Box>
      </Box>
      <Stack spacing={2} direction="row"
        className={aboutStyle.container}
        sx={{
          marginTop: '40px',
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={7} md={12}>
            <Typography variant='body1' sx={{ fontWeight: '700' }} className={aboutStyle.bodyText}>
              Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.
            </Typography>
            <Typography variant='body1' sx={{ marginTop: '30px' }} className={aboutStyle.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc.
              Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor,
              lectus orci elementum augue, eget auctor metus ante sit amet velit.
            </Typography>
            <Typography variant='body1' sx={{ marginTop: '30px' }} className={aboutStyle.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc.
              Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor,
              lectus orci elementum augue, eget auctor metus ante sit amet velit.
            </Typography>
            <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} lg={4}>
                  <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                      <PersonIcon sx={{ fontSize: '4rem', color: '#ff5a5f', height: '100%' }} />
                    </Box>
                    <Stack sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant='h3' sx={{ fontSize: '25px', fontWeight: '600' }}>80,123</Typography>
                      <Typography variant='subtitle2' >Customer to date</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                      <HomeIcon sx={{ fontSize: '4rem', color: '#ff5a5f', height: '100%' }} />
                    </Box>
                    <Stack sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant='h3' sx={{ fontSize: '25px', fontWeight: '600' }}>$74 Billion</Typography>
                      <Typography variant='subtitle2' >In home sales</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                      <LocalAtmIcon sx={{ fontSize: '4rem', color: '#ff5a5f', height: '100%' }} />
                    </Box>
                    <Stack sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant='h3' sx={{ fontSize: '25px', fontWeight: '600' }}>$468 Million</Typography>
                      <Typography variant='subtitle2' >In Savings</Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={5} md={12} sx={{ width: '100%' }}>
            <Box sx={{ position: 'relative', width: '100%' }}>
              <img
                className={aboutStyle.bodyImg}
                src={Mission}
                alt=""
              />
              <button
                onClick={handleOpen}
                className={aboutStyle.play}>
                <PlayArrowOutlinedIcon
                  sx={{ fontSize: '70px', fontWeight: '50', color: '#fff' }}
                />
                {/* <YoutubeEmbed embedId="watch?v=we-3ZFArj48" /> */}
              </button>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Youtube video"
        aria-describedby="Youtube video"
      >
        <Box sx={style}>
          <iframe
            src="https://www.youtube.com/embed/WyUfVPbv1z8"
            title="Youtube video"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width={1000}
            height={500}
            className={aboutStyle.videoFrame}
          >

          </iframe>
        </Box>
      </Modal>
      <Stack
        className={aboutStyle.container}
        sx={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px 0px',
        }}
      >
        <Typography variant='h1'
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '0px'
          }}
          className={aboutStyle.title}
        >Why Choose Us
        </Typography>
        <Typography variant='subtitle1'
        >We provide full service at every step.
        </Typography>
      </Stack>
      <Grid
        className={aboutStyle.container}
        container
        spacing={3}
        direction='row'
        alignItems='center'>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={aboutStyle.cards}>
            <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box className={aboutStyle.cardIconBox}>
                <HandshakeOutlinedIcon sx={{ fontSize: '60px' }} />
              </Box>
              <Typography variant='h4' sx={{ fontSize: '0.9rem', fontWeight: '600' }}>Trusted By Thousands</Typography>
              <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>
                Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={aboutStyle.cards}>
            <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box className={aboutStyle.cardIconBox}>
                <CottageOutlinedIcon sx={{ fontSize: '60px' }} />
              </Box>
              <Typography variant='h4' sx={{ fontSize: '0.9rem', fontWeight: '600' }}>Trusted By Thousands</Typography>
              <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>
                Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={aboutStyle.cards}>
            <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box className={aboutStyle.cardIconBox}>
                <PriceChangeOutlinedIcon sx={{ fontSize: '60px' }} />
              </Box>
              <Typography variant='h4' sx={{ fontSize: '0.9rem', fontWeight: '600' }}>Trusted By Thousands</Typography>
              <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>
                Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      <Stack spacing={2}
        className={aboutStyle.container}
        sx={{
          backgroundColor: '#f7f7f7;',
          marginTop: '50px'
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '50px 0'
          }}
        >
          <Typography variant='h1'
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '0px'
            }}
            className={aboutStyle.title}
          >Our Team
          </Typography>
          <Typography variant='subtitle1'
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Box className={aboutStyle.TeamSliderCon}>
          <Slider {...settings}>
            {cardData?.map((data) => (
              <Card key={data.id} className={aboutStyle.TeamCards}>
                <Stack padding={1}>
                  <Box className={aboutStyle.ImgCom}>
                    <img
                      className={aboutStyle.TeamImg}
                      src={data.img}
                      alt="Team profile"
                    />
                    <Box className={aboutStyle.hoverBox}></Box>
                    <Stack spacing={2} direction='row' className={aboutStyle.IconCon}>
                      <Link></Link>
                      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>

                    </Stack>
                  </Box>
                  <Box display='flex' flexDirection='column' alignItems='center' sx={{ marginTop: '20px' }}>
                    <Typography variant='h4' sx={{ fontSize: '1rem' }}>
                      {data.name}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontSize: '0.8rem', marginBottom: '20px' }}>
                      {data.role}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            ))}

          </Slider>
        </Box>
      </Stack>
      <Stack className={aboutStyle.testimonialCon}>
        <Testimonial />
      </Stack>
      <Stack
        className={aboutStyle.container}
        spacing={2}
        sx={{ margin: '50px 0px' }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '50px 0px'
          }}
        >
          <Typography variant='h1'
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '0px'
            }}
            className={aboutStyle.title}
          >Our Partners
          </Typography>
          <Typography variant='subtitle1'
          >We only work with the best companies around the globe
          </Typography>
        </Stack>
        <Grid container
          spacing={3}
          direction='row'
          alignItems='center'
          className={aboutStyle.container}>
          <Grid item
            className={aboutStyle.partnerIcon}
            lg={2.4} md={4} sm={6} xs={12}>
            <img
              src={CompanyName}
              alt=""
            />
          </Grid>
          <Grid item
            className={aboutStyle.partnerIcon}
            lg={2.4} md={4} sm={6} xs={12}>
            <img
              src={Cityscape}
              alt=""
            />
          </Grid>
          <Grid item
            className={aboutStyle.partnerIcon}
            lg={2.4} md={4} sm={6} xs={12}>
            <img
              src={RealEstate}
              alt=""
            />
          </Grid>
          <Grid item
            className={aboutStyle.partnerIcon}
            lg={2.4} md={4} sm={6} xs={12}>
            <img
              src={Trustesta}
              alt=""
            />
          </Grid>
          <Grid item
            className={aboutStyle.partnerIcon}
            lg={2.4} md={4} sm={6} xs={12}>
            <img
              src={RealE}
              alt=""
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack >
  )
}

