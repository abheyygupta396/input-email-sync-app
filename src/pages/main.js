import React, { useState } from "react";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import { emailsArray } from "../data/sample";
import { useDispatch, useSelector } from "react-redux";
import MobileScreen from "../components/MobileScreen";
import TextFieldComponent from "../components/TextFieldComponent";
import { emptyStates } from "../redux/slices/emailSlice";

function Sample() {
  const dispatch = useDispatch();
  const [newArr, setNewArr] = useState(emailsArray);
  const { subjectLineA, subjectLineB, previewText } = useSelector(
    (state) => state.email
  );

  const emailPreviewStyles = {
    ".email-preview": {
      fontFamily: "Arial, sans-serif",
      "& .subject": {
        fontWeight: "bold",
      },
      "& .sender": {
        color: "#5f6368",
      },
      "& .preview": {
        color: "#5f6368",
        fontSize: "0.9em",
      },
    },
  };

  const handleDispatch = () => {
    const arr = [
      {
        headline1: subjectLineA,
        headline2: subjectLineB,
        description: "",
      },
      ...emailsArray,
    ];
    setNewArr(arr);
  };

  const handleEmptyStates = () => dispatch(emptyStates());
  return (
    <Paper elevation={3} sx={{ p: 3, margin: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Subject
      </Typography>
      <Typography variant="body2" gutterBottom>
        Add a subject line for this campaign.
      </Typography>
      <br />
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <br />

            {/* Text Field Component */}
            <Grid container spacing={2}>
              <TextFieldComponent />
            </Grid>

            {/* Buttons */}
            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleEmptyStates} variant="text" sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button onClick={handleDispatch} variant="contained">
                Save
              </Button>
            </Box>
          </Grid>

          {/* Mobile UI Screen */}
          <Grid item xs={12} md={6}>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                backgroundColor: "#f5f5f5",
                ...emailPreviewStyles,
              }}
            >
              <Box className="email-preview">
                <MobileScreen newArr={newArr} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default Sample;
