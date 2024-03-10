import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"} sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight={"Light"}>March 10th, 2024</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30, mr:1}}></SaveOutlined>
                Save
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type="text"
                variant='filled'
                fullWidth
                placeholder='Add a title'
                label="Title"
                sx={{border:"none", mb:1}}
            />
            <TextField
                type="text"
                variant='filled'
                fullWidth
                multiline
                placeholder='What happened today?'
                minRows={5}
            />
        </Grid>
        { /* Image gallery */}
        <ImageGallery></ImageGallery>
    </Grid>
  )
}
