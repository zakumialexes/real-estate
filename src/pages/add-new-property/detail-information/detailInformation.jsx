import { useState } from "react"
import styles from "./detailInformation.module.scss"
import {
    Typography,
    Grid,
    TextField,
    Stack,
    Button,
    FormGroup,
    FormControl,
    FormControlLabel,
    Checkbox,
} from "@mui/material"

const DetailInformation = () => {
    const [detailInfo, setDetailInfo] = useState({
        propertyId: "",
        areaSize: "",
        sizePrefix: "",
        landArea: "",
        landAreaSizePostFix: "",
        bedRooms: "",
        bathRooms: "",
        garages: "",
        garagesSize: "",
        yearBuilt: "",
        videoUrl: "",
        virtualTour: "",
    })
    const [checkAmenities, setCheck] = useState([])

    const handleChange = (e) => {
        setDetailInfo({ ...detailInfo, [e.target.id]: [e.target.value] })
    }

    const handleSubmit = () => {
        console.log(detailInfo, checkAmenities)
    }

    const handleChecked = (e) => {
        const idx = checkAmenities.indexOf(e.target.value)
        if (idx === -1) {
            setCheck([...checkAmenities, e.target.value])
        } else {
            setCheck(checkAmenities.filter((check) => check !== e.target.value))
        }
    }

    return (
        <div className={styles.detailInformation}>
            <Typography variant="h4">Detail Information</Typography>
            <Grid my={2} spacing={2} container>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Property Id"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.propertyId}
                        id="propertyId"
                        type="number"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Area Size"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.areaSize}
                        id="areaSize"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Size Prefix"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.sizePrefix}
                        id="sizePrefix"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Land Area"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.landArea}
                        id="landArea"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Land Area Size Post Fix"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.landAreaSizePostFix}
                        id="landAreaSizePostFix"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Bed Rooms"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.bedRooms}
                        id="bedRooms"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Bath Rooms"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.bathRooms}
                        id="bathRooms"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Garages"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.garages}
                        id="garages"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Garages Size"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.garagesSize}
                        id="garagesSize"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Year Built"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.yearBuilt}
                        id="yearBuilt"
                        type="number"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="VideoUrl"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.videoUrl}
                        id="videoUrl"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="virtualTour"
                        variant="outlined"
                        onChange={handleChange}
                        value={detailInfo.virtualTour}
                        id="virtualTour"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography mt={2} variant="h4">
                        Amenities
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FormGroup className={styles.checkForm}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Air Conditioning")}
                                    onChange={handleChecked}
                                    value="Air Conditioning"
                                />
                            }
                            label="Air Conditioning"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Lawn")}
                                    onChange={handleChecked}
                                    value="Lawn"
                                />
                            }
                            label="Lawn"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Swimming Pool")}
                                    onChange={handleChecked}
                                    value="Swimming Pool"
                                />
                            }
                            label="Swimming Pool"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Barbeque")}
                                    onChange={handleChecked}
                                    value="Barbeque"
                                />
                            }
                            label="Barbeque"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Refrigerator")}
                                    onChange={handleChecked}
                                    value="Refrigerator"
                                />
                            }
                            label="Refrigerator"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ paddingTop: { xs: "0px !important", sm: "16px !important" } }}>
                    <FormGroup className={styles.checkForm}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Outdoor Shower")}
                                    onChange={handleChecked}
                                    value="Outdoor Shower"
                                />
                            }
                            label="Outdoor Shower"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Laundry")}
                                    onChange={handleChecked}
                                    value="Laundry"
                                />
                            }
                            label="Laundry"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Dryer")}
                                    onChange={handleChecked}
                                    value="Dryer"
                                />
                            }
                            label="Dryer"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Tv Cable")}
                                    onChange={handleChecked}
                                    value="Tv Cable"
                                />
                            }
                            label="Tv Cable"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Wifi")}
                                    onChange={handleChecked}
                                    value="Wifi"
                                />
                            }
                            label="Wifi"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ paddingTop: { xs: "0px !important", md: "16px !important" } }}>
                    <FormGroup className={styles.checkForm}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Microwave")}
                                    onChange={handleChecked}
                                    value="Microwave"
                                />
                            }
                            label="Microwave"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Washer")}
                                    onChange={handleChecked}
                                    value="Washer"
                                />
                            }
                            label="Washer"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Sauna")}
                                    onChange={handleChecked}
                                    value="Sauna"
                                />
                            }
                            label="Sauna"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Gym")}
                                    onChange={handleChecked}
                                    value="Gym"
                                />
                            }
                            label="Gym"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkAmenities.includes("Window Coverings")}
                                    onChange={handleChecked}
                                    value="Window Coverings"
                                />
                            }
                            label="Window Coverings"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
        </div>
    )
}

export default DetailInformation
