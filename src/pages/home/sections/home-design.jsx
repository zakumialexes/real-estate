import React,{useState, useRef, useEffect} from 'react'
import { Box, Typography, Container, Stack, TextField, Button, IconButton, InputAdornment, Grid, Popper, Link, Slider, useMediaQuery, MenuList, MenuItem , ClickAwayListener, FormControlLabel, Checkbox} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import style from './home-design.module.scss'
import { MoreVert } from '@mui/icons-material'
import background from '../../../assets/home/findproperties/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import icon from "../../../assets/additional/header-logo.png"
import styled from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';




export function PopperSelect ({ type, data, propertyType, isNumber}){
  const anchorEl = useRef()
  const [select, setSelect] = useState()
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(pre=>!pre)
  }
  const onSelect = (event) => {
    setSelect(event.currentTarget.dataset)
    setOpen(pre=>!pre)
  }
  const handleClickAway = () => {
   setOpen(false)
  }

  const style = {
    popstyle : {
      bgcolor: "white",
      minWidth: propertyType ? "170px" : "150px",
      height: propertyType? "fit-content" : "305px",
      overflowY: propertyType? "visible" : "auto",
      overflowX: "hidden",
      borderRadius: "5px",
      boxShadow: "0 0 10px gray",
      position: propertyType && "relative",
      top: propertyType && "3em",
      "::-webkit-scrollbar": {
        width: "10px"
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#ff5a5f",
        borderRadius: "10px",
        border:"3.5px solid white"
      }
    },
     wrapper : {
      zIndex: 0,
      maxWidth: propertyType ? "100%" : "200px",
      flexGrow: 1
    },
    selector : {
      minWidth: propertyType ? "170px" : "150px",
      color: select? "": "silver",
      height: "48px",
      border: open  ? "2px solid #ff5a5f" : "1px solid silver" ,
      borderSpacing: open? "none": "1px",
      padding: "11px 6px",
      borderRadius: "4px",
      maxWidth: "100%",
      flexGrow: propertyType && 1,
      cursor: "pointer",
      "&:hover": {
        border: !open  && "1px solid black"
      }
    },
    arrow: {
      width: 0,
	   height: 0,
	   borderLeft:" 15px solid transparent",
	   borderRight: "15px solid transparent",
      borderBottom: "15px solid white",
      position: "relative",
      top: "3em",
     left:"4.5em",
      zIndex:1
    }
  }
  

  return (
    <Box ref={anchorEl} sx={style.wrapper}>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        onClick={handleClick}
        sx={style.selector}>
     
      <Typography>{select ? select?.value : type} {select && isNumber && type}</Typography>  
        {open ? <ArrowDropUpIcon fontSize='small' sx={{color: "black"}} />:<ArrowDropDownIcon fontSize='small' sx={{color: "black"}}/>}
      </Stack>

      <Popper
        open={open}
        anchorEl={anchorEl.current}
        sx={{ position: "relative" }}
          >
        <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
        <Box sx={style.arrow}></Box>
        <Box sx={style.popstyle}>
        
        <MenuList sx={{width:"100%"}}>
              {data?.map((data,index) => (<MenuItem key={index} onClick={onSelect} data-value={data}><Stack sx={{width: "100%"}} direction="row" justifyContent="space-between" ><Typography>{data}</Typography>{select?.value==data && <CheckIcon fontSize='small' color='primary' />}</Stack></MenuItem>))}
        </MenuList>
            </Box>
            </Box>  
        </ClickAwayListener>
      </Popper>

    </Box>
  )
}


//Price Selector
const RangeSlider = ({ value, change }) => {
  const container = {
    maxWidth: "30em",
    minWidth: "14em",
    bgcolor: "white",
    borderRadius: "10px",
    margin: "10px",
    marginTop: "0",
    padding: "10px 20px",
    boxShadow: "0 0 10px gray",
    zIndex: 10,
    cursor:"pointer"
  }
  return (
    <Container sx={container}>
      <Box sx={{margin: "15px"}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%", marginBottom: "15px" }}>
         
          <Typography
            variant="body1"
            color="#006c70"
            sx={{ fontWeight: "bold" }}>${value[0]}</Typography>
        
          <Typography
            variant="body1"
            color="#006c70"
            sx={{ fontWeight: "bold" }}>${value[1]}</Typography>
          
      </Stack>
      <Slider
        size='medium'
        min={52000}
        max={130000}
        value={value}
        onChange={change}
        valueLabelDisplay="off"
        sx={{
          '& .MuiSlider-thumb': {
            width: "12px",
            height: "12px",
            border: "10px solid white",
            boxShadow: "0 -1px 5px gray",
            boxSizing: "content-box"
          },
          '& 	.MuiSlider-rail': {
            color: "gray",
            height: "7px"
          }
        }}
        />
      </Box>
    </Container>
  )
}
const PriceSelector = () => {
  const price = useRef()
  
  const [arrowRef, setArrowRef] = useState(null)
  const [value, setValue] = useState([52000, 98000])
  const [display, setDisplay] = useState()
  const [open, setOpen] = useState(false)
  const handleClick = () => { 
    setOpen(pre => !pre)
  
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const clickAway = () => {
    setDisplay(value)
    setOpen(false)
  }
  const selector = {
    
    minWidth: "170px",
    maxWidth: "100%",
    height: "48px",
    border: open ? "2px solid #ff5a5f" : "1px solid silver",
    padding: "11px 6px",
    borderRadius: "5px",
    "&:hover": {
      border: !open && "1px solid black"
    }
  }
  const arrow = {
    bgcolor: "white",
    width: "20px",
    height: "20px",
    transform: "rotate(45deg)",
    position: "relative",
    top: "10px", left: "6em",
    boxShadow: "-13px -13px 30px  silver"
  }
  


  return (
    <Box ref={price} sx={{position:"relative",cursor: "pointer",flexGrow: 1,}} >
      
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems="center"
        onClick={handleClick}
        sx={selector}>
        <Typography sx={{color: display? "black": "silver"}}>{display ? `$${display[0]}-$${display[1]}` : "Price"}</Typography>
        {open? <ArrowDropUpIcon fontSize='small' color='black'/>: <ArrowDropDownIcon fontSize='small' color='black'/>}
      </Stack>
      <Popper open={open} anchorEl={price.current} sx={{maxWidth: "15em"}}
        modifiers={[
          {
            name: 'flip',
            enabled: false,
            options: {
              altBoundary: true,
              rootBoundary: 'document',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: 'document',
              padding: 8,
            }
          },{
            name: 'arrow',
            enabled: true,
            options: {
              element: arrowRef,
            }
          }]}>
        
        <ClickAwayListener onClickAway={clickAway}>
      
          
          <Box sx={{ position: "relative", top: "40px", width: "100%" }}>
            <Box sx={arrow}></Box>
            <RangeSlider value={value} change={handleChange} />
          </Box>
           
        </ClickAwayListener>
      </Popper>
    </Box>
  )
}



const Amenities = ({ hide, screen }) => {
  useEffect(() => {
    screen && !hide ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto" 
  },[screen])
  const bathroom = [1,2,3, 4,5,6,7,8]
  const bedroom = [1, 2,3, 4,5,6,7,8]
  const yearBuilt = [2013,2014,2015,2016,2017,2018,2019,2020]
  const area = ["Adana", "Ankara", "Antalya", "Bursa", "Bodrum", "Gaziantep", "istanbul", "izimir", "konya"]
  const wrapper = {
    margin: screen ? "0" : "0 20px",
    bgcolor: "white",
    borderRadius: screen ? "" : "10px",
    zIndex: 100,
    position: "relative",
    top: screen ? "0" : "2em",
    maxWidth: "65em",
    minWidth: "9em",
    maxHeight:screen && "100vh",
    overflow: "scroll",
    "::-webkit-scrollbar": {
        display: "none"
    },
    boxShadow: "0 0 10px gray"
  }
  const CheckBox = ({label}) => {
    return (
      <Grid item md={2} sm={3} xs={4} size="small">
        <FormControlLabel
          control={<Checkbox />}
          label={label}
          labelPlacement={"end"}
        />
      </Grid>
    )
  }
  return (
    <Box sx={wrapper}>
      <Box sx={{padding: "30px", width:"fit-content"}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{padding:"5px", width: "100%"}}>
          <Typography
            variant="h6"
            color="#006c70"
            sx={{ fontWeight: "bold" }}>Amenities</Typography>
          <Button variant='contained' sx={{ width: "fit-content", }} onClick={hide}>HIDE</Button>
        </Stack>
      <Grid container sx={{width: "100%", margin: "20px 0"}} justifyContent="center" alignItems="center"  gap={2}>
          <CheckBox label={"Air Conditioning"} />
          <CheckBox label={"Barbeque"}/>
          <CheckBox label={"Dryer"}/>
          <CheckBox label={"Gym"}/>
          <CheckBox label={"Laundry"}/>
          <CheckBox label={"Lawn"}/>
          <CheckBox label={"Microwave"}/>
          <CheckBox label={"Outdoor Shower"}/>
          <CheckBox label={"Refrigerator"}/>
          <CheckBox label={"Sauna"}/>
          <CheckBox label={"Swimming Pool"}/>
          <CheckBox label={"TV Cable"}/>
          <CheckBox label={"Washer"}/>
          <CheckBox label={"WiFi"}/>
          <CheckBox label={"Window Coverings"}/>
        </Grid>
          
 
      <Stack direction="row" justifyContent="center" alignItems="center" flexWrap="wrap" spacing={2} gap={2} sx={{width: "100%", margin:"10px 0"}}>
          <PopperSelect type={"Bathroom"} data={bathroom} isNumber={true} />
          <PopperSelect  type={"Bedroom"} data={bedroom} isNumber={true} />
          <PopperSelect  type={"Year Built"} data={yearBuilt}/>
          <PopperSelect type={"Built-up Area"} data={area} />
          
          
      
        </Stack>
         
      </Box>
    </Box>
  )
}
const SearchBar = () => {
  const smallerScreen = useMediaQuery("(max-width: 520px)")
  
 
  const propertyType = ["Apartment", "Bangalow", "condo", "house", "Land", "Single Family"]
  const advance =  useRef()
  const btn = {
    flexGrow: 1,
    maxWidth: "170px",
    minWidth: "100px",
    borderRadius: "8px",
    border: "2px solid transparent",
    "&:hover" : {
        backgroundColor: "transparent",
        border: "2px solid #ff5a5f",
        color: "#ff5a5f"
    }
  }
  const inputField = {
      sx: {
         height: "15px",
         maxWidth: "160px",
         minWidth: "120px",
      }
      
  }
  
  const Advanced = ({}) => {
    
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(pre=>!pre)
    }
    const hide = () => {
      setOpen(false)
    }
    return (
      <Box>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={1} sx={{ flexGrow: 1}}>
          <Typography>Advanced</Typography>
          <IconButton onClick={handleClick}><MoreVert /></IconButton>
        </Stack>
        <Popper open={open} anchorEl={advance.current}
         modifiers={[
          {
            name: 'flip',
            enabled: false,
            options: {
              altBoundary: true,
              rootBoundary: 'document',
              padding: 8,
            },
          },
          {
            name: 'preventOverflow',
            enabled: false,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: 'document',
              padding: 8,
            },
          }]}>
          <Box sx={{ position: "relative" }}>
            
            <Amenities hide={hide} screen={smallerScreen} />
          </Box>
        </Popper>
      </Box>
    )
  }
  const LocationInputIcon = () => {
    return (
      <InputAdornment
        position='end'
        sx={{ position: "absolute", right: "15px" }}>
          <FontAwesomeIcon icon={faLocationDot} />
      </InputAdornment>
    )
  }
  return (
    <Stack
      direction="row"
      justifyContent="center"
      flexWrap="wrap"
      className={style.SearchBar}
      sx={{ backgroundColor: "white" }}
      gap={2} ref={smallerScreen ? null : advance} >
     
      
      <TextField
        inputProps={inputField}
        margin='none'
        placeholder='Enter Keywords...'
        sx={{ flexGrow: 1 }} />
      
      <PopperSelect
        type={"Property Type"}
        data={propertyType}
        propertyType={true} />

      <TextField
        inputProps={inputField}
        margin='none'
        placeholder='Location'
        InputProps={{
          endAdornment: <LocationInputIcon/>
        }}
        sx={{ flexGrow: 1 }} />
      
      <PriceSelector /> 
      
      <Advanced /> 
      <Button variant='contained'color='primary' sx={btn}>Search</Button>
    
    </Stack>
  )
}


const HomeDesign = () => {
  const [isBuy, setIsBuy] = useState(true)
  const smallScreen = useMediaQuery('(max-width: 650px)')
  const smallerScreen = useMediaQuery('(max-width: 992px)')
  const link = {
    width: "fit-content",
    bgcolor: "white",
    borderRadius: "30px",
    textAlign: "center",
    padding: "10px"
  }
  return (
    <Box className={style.wrap} >
     
      
          <Stack
            direction="row"
            justifyContent='space-between'
            alignItems="center"
            className={style.navba}
            sx={{ display: smallerScreen ? "none" : "flex" }}>
            <Stack
              direction='row'
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <img src={icon} alt="Shwe Real Estate" />
              <Typography variant='h5' sx={{color: "white"}}>Shwe Real Estate</Typography>
            </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                 <Link sx={{color: "white", textDecoration: "none"}}>Contact</Link>
                 <Link sx={{color: "white", textDecoration: "none"}}>Login/Register</Link>
                  <Box sx={link}>
                    <Link sx={{ color: "#ff5a5f", textDecoration: "none" }}>
                      Create Listing
                    </Link>
                  </Box>
            </Stack>
          </Stack>
         <Container className={style.Container}>
              <Box className={style.heading} sx={{ color: "white", opacity: 1}}>
                  <Typography variant={smallScreen? "h4": "h3"} sx={{fontWeight:'bold'}}>Find Your Dream Home</Typography>
                  <Typography variant='subtitle1'>From as low as $10 per day with limited time offer discounts</Typography>
              </Box>
              <Box className={style.body}>
                <Stack direction="row" gap={3}>
                  <Box className={isBuy? style.toggleBtnSelected : style.toggleBtn} onClick={()=>{setIsBuy((pre)=> pre ? pre : !pre)}}>Buy</Box>
                  <Box className={!isBuy? style.toggleBtnSelected : style.toggleBtn} onClick={()=>{setIsBuy((pre)=>!pre ? pre : !pre)}}>Rent</Box>
                </Stack>
                  <Box sx={{marginTop: "30px"}}>
                      {isBuy? <SearchBar/> : <SearchBar/>}
                  </Box>
              </Box>
         </Container>
    </Box>
  )
}

export default HomeDesign