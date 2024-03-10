import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      { /* Nothing Selected */ }
      <NothingSelectedView></NothingSelectedView>
      {/* NoteView */}
      {/*<NoteView></NoteView>*/}
      <IconButton
        size="large"
        sx={{
          color:"white",
          backgroundColor: "error.main",
          ":hover":{backgroundColor: "error.main", opacity: 0.9},
          position:"fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize:30}}></AddOutlined>
      </IconButton>
    </JournalLayout>
  );
};
