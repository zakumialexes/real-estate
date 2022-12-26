import React, { useState } from 'react'
import { useRef } from 'react';
import { Stack, styled, TextField, IconButton, createTheme } from '@mui/material'

import api from './api';

//icons
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

export const WriteReply = ({ replyId, bodyText, myReview, setAction, isEdit }) => {
    const [editValue, setEditValue] = useState(bodyText);
    const ref = useRef(null);
    const CustomTextField = styled(TextField)({
        "& fieldset": {
            border: "1px solid rgb(235, 235, 235) !important",
            borderRadius: "8px",
            color: "#484848",
            fontSize: "14px",
            paddingLeft: "20px",
        },
    })

    const theme = createTheme({
        palette: {
            success: {
                main: '#0bff00',
            },
            danger: {
                main: '#ff0008'
            }
        },
    });

    const onSubmit = async () => {
        setEditValue(ref.current.value)
        try {
            const response = await api.get(`/Reviews/${replyId}`)
            const putData = {
                ...response.data, bodyText: ref.current.value,
            };
            await api.put(`/Reviews/${replyId}`, putData)
        } catch (err) { console.log(err.message) }

    };

    return (
        <form sx={{ width: '100%', margin: '0', padding: '0' }} onSubmit={onSubmit}>
            <Stack direction='column' spacing={2}>
                <CustomTextField
                    inputRef={ref}
                    multiline
                    rows={4}
                    defaultValue={myReview && editValue}
                />
                <Stack direction='row' spacing={2}>
                    <IconButton
                        color="danger"
                        theme={theme}
                        aria-label="cancel"
                        onClick={() => setAction((prevState) => !prevState)}
                    >

                        <ClearIcon />
                    </IconButton>
                    <IconButton type='submit' color="success" theme={theme} aria-label="submit">
                        <CheckIcon />
                    </IconButton>
                </Stack>
            </Stack>

        </form>
    )
}
