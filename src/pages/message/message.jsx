import { Container, Grid, styled, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import AllMessage from "./all-message/all-message"
import { Title } from "./reuse/reuse"
import UserMessage from "./user-message/user-message"
import api from "../my-properties/api"
import { useGetByParametersMessagesQuery, useAddMessageMutation } from "../../api/api"

const Message = () => {
    const { data: chatRooms, isSuccess } = useGetByParametersMessagesQuery("/messages")
    const [conservationRoom, setConservationRoom] = useState({ chatRoom: [] })
    const [filterChatRooms, setFilterChatRooms] = useState([])
    const [sendMessage] = useAddMessageMutation()
    const activeConservation = (id) => {
        var setConservationData = chatRooms.filter((data) => data.chatRoom && data.chatRoom.id === id)
        setConservationRoom(...setConservationData)
    }

    const searchFeature = (keyword) => {
        const data = chatRooms.filter((data) => data.name.toLowerCase().includes(keyword.toLowerCase()))
        setFilterChatRooms(data)
    }

    const insertNewMessage = async (data) => {
        await sendMessage(data)
    }
    useEffect(
        () => conservationRoom.id && setConservationRoom(chatRooms.find((room) => room.id === conservationRoom.id)),
        [chatRooms]
    )
    if (isSuccess)
        return (
            <Box
                sx={{
                    paddingY: "60px",
                    paddingX: { xs: "15px", md: "60px" },
                    background: "#f7f7f7",
                }}
            >
                <Title title="Message" />
                <Grid container spacing={2} mt={5}>
                    <Grid item xs={12} lg={5}>
                        <AllMessage
                            chatRooms={filterChatRooms.length > 0 ? filterChatRooms : chatRooms}
                            activeConservation={activeConservation}
                            searchFeature={searchFeature}
                        />
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <UserMessage conservationRoom={conservationRoom} insertNewMessage={insertNewMessage} />
                    </Grid>
                </Grid>
            </Box>
        )
}

export default Message
