import { useEffect, useState } from "react"
import styles from "./propertiesMedia.module.scss"
import { Typography, Box, Button, Stack } from "@mui/material"
import DragDrop from "./dragAndDrop"
import TextAttachment from "./textAttachment"

const PropertiesMedia = () => {
    const [image, setImage] = useState([])
    const [text, setText] = useState([])

    const handleUpload = () => {
        console.log("Properties Image array", image, "Properties text array", text)
    }

    return (
        <>
            <div className={styles.bottomProp}>
                <Typography variant="h4">Property Media</Typography>
                {/* Drap&Drop Image */}
                <DragDrop onImageUploadSuccess={(file) => setImage(file)} />

                <Box mb={2} mt={4} className={styles.attachments}>
                    <Typography variant="h5">Attachments</Typography>
                    <TextAttachment onTextUploadSuccess={(file) => setText(file)} />
                </Box>
            </div>
        </>
    )
}

export default PropertiesMedia
