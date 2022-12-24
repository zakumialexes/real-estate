import {
    Box,
    CardMedia,
    Stack,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    useMediaQuery,
    Button,
} from "@mui/material"
import { useDispatch } from "react-redux"
import { dataFetch } from "../../utils/reducers"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { editBtn } from "./svg"
import { IconButton, DeleteModal } from "./customComponents"
import api from "./api"
export const Action = ({ children, id, setWatcher }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [modalId, setModalId] = useState()
    const style = {
        heading: {
            color: "red",
            margin: "15px 0 20px 0 ",
        },
        description: {
            lineHeight: 1.6,
        },
        buttons: {
            margin: "15px 0",
        },
    }
    const handleDelete = () => {
        dispatch(dataFetch([`my-properties/${modalId}`, "delete"]))
        setOpen(false)
        setWatcher((pre) => !pre)
    }
    const handleOpen = () => {
        setOpen(true)
        setModalId(id)
    }

    const handleClose = () => setOpen(false)
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
            {children}
            <DeleteModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}>
                <Typography sx={style.heading} variant="h4">
                    Are you sure?
                </Typography>
                <Typography sx={style.description} variant="h6">
                    Do you really wanna delete this? This process can't be undone!
                </Typography>
                <Stack justifyContent="flex-end" alignItems="center" direction="row" spacing={2} sx={style.buttons}>
                    <Button variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleDelete}>
                        Delete
                    </Button>
                </Stack>
            </DeleteModal>
        </Stack>
    )
}

const ImageThumb = ({ children }) => {
    const style = {
        backgroundColor: "#ff5a5f",
        color: "white",
        position: "relative",
        display: "flex",
        gap: "2px",
        top: "20px",
        left: "20px",
        width: "fit-content",
        padding: "4px",
        borderRadius: "3px",
    }
    return (
        <Box sx={style}>
            <Typography variant="body1">{children}</Typography>
        </Box>
    )
}

export const ListingTitle = ({ image, price, name, location, tags, screen }) => {
    const smallScreen = useMediaQuery("(max-width:550px)")
    const style = {
        wrapper: {
            cursor: "pointer",
            width: "100%",
        },
        image: {
            height: "100%",
            width: "100%",
            opacity: 0.6,
            borderRadius: "10px",
        },
        imageWrapper: {
            minWidth: screen ? "100%" : smallScreen ? "200px" : "150px",
            height: screen ? "fit-content" : "125px",
            backgroundColor: "#1d293e",
            position: "relative",
            borderRadius: "10px",
        },
        price: { color: "#ff5a5f" },
        location: {
            color: "black",
            display: "flex",
            gap: "3px",
        },
        name: { fontWeight: "bold" },
        thumbNail: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
        },
    }
    return (
        <Stack direction={smallScreen ? "column" : "row"} spacing={3} alignItems="center" sx={style.wrapper}>
            <Box sx={style.imageWrapper}>
                <CardMedia component="img" image={image} sx={style.image} />
                <Box sx={style.thumbNail}>
                    {tags?.map((tag, i) => (
                        <ImageThumb key={i}>{tag}</ImageThumb>
                    ))}
                </Box>
            </Box>
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                <Typography variant="h6" sx={style.name}>
                    {name}
                </Typography>
                <Box sx={style.location}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <Typography variant="body2">{location}</Typography>
                </Box>
                <Box sx={style.price}>
                    <Typography sx={{ fontWeight: "bold", display: "inline" }}>{price}</Typography>
                    <small>/mo</small>
                </Box>
            </Stack>
        </Stack>
    )
}

const StatusChip = ({ status, children }) => {
    const color = () => {
        if (children === "published") {
            return "rgb(57, 218, 138)"
        } else if (children === "processing") {
            return "rgb(253, 57, 122)"
        } else {
            return "rgb(255, 90, 95)"
        }
    }
    const style = {
        borderRadius: "5px",
        backgroundColor: color(),
        width: "fit-content",
        padding: "10px",
        color: "#fff",
        margin: "auto",
    }
    return (
        <Box sx={style}>
            <Typography>{children}</Typography>
        </Box>
    )
}

const TableListRow = ({ image, date, status, price, name, location, view, tags, id, setWatcher }) => {
    const smallScreen = useMediaQuery("(max-width:550px)")

    return (
        <TableRow>
            <TableCell sx={{ minWidth: smallScreen ? "225px" : "350px" }}>
                <ListingTitle image={image} name={name} price={price} location={location} tags={tags} />
            </TableCell>
            <TableCell align="center" sx={{ minWidth: "140px" }}>
                <Typography>{date}</Typography>
            </TableCell>
            <TableCell>
                <StatusChip>{status}</StatusChip>
            </TableCell>
            <TableCell align="center">
                <Typography>{view}</Typography>
            </TableCell>
            <TableCell>
                <Action id={id} setWatcher={setWatcher}>
                    <IconButton path={editBtn} title="Edit" />
                </Action>
            </TableCell>
        </TableRow>
    )
}

const ListTable = ({ properties, setWatcher }) => {
    const style = {
        table: {
            borderRadius: "10px",
            border: "0.5px solid silver",
        },
        head: {
            backgroundColor: "rgb(36, 50, 74)",
        },
    }
    console.log(properties)
    const TableHeader = ({ children }) => {
        return (
            <Typography color="white" align="center">
                {children}
            </Typography>
        )
    }

    return (
        <TableContainer>
            <Table sx={style.table}>
                <TableHead sx={style.head}>
                    <TableRow>
                        <TableCell>
                            <TableHeader>List Title</TableHeader>
                        </TableCell>
                        <TableCell>
                            <TableHeader>Date Published</TableHeader>
                        </TableCell>
                        <TableCell>
                            <TableHeader>Status</TableHeader>
                        </TableCell>
                        <TableCell>
                            <TableHeader>View</TableHeader>
                        </TableCell>
                        <TableCell>
                            <TableHeader>Action</TableHeader>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {properties?.map((property) => {
                        return (
                            <TableListRow
                                setWatcher={setWatcher}
                                image={property.image}
                                date={property.date}
                                status={property.status}
                                price={property.price}
                                location={property.location}
                                name={property.name}
                                key={property.id}
                                id={property.id}
                                view={property.view}
                                tags={property.tags}
                            />
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListTable
