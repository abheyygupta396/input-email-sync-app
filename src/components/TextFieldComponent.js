import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSubjectLineA,
  setSubjectLineB,
} from "../redux/slices/emailSlice";
import { Box, TextField, Typography } from "@mui/material";

const TextFieldComponent = () => {
  const dispatch = useDispatch();
  const { subjectLineA, subjectLineB, previewText } = useSelector(
    (state) => state.email
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <TextField
        label="Subject line A"
        value={subjectLineA}
        onChange={(e) => dispatch(setSubjectLineA(e.target.value))}
        fullWidth
      />
      <TextField
        label="Subject line B"
        value={subjectLineB}
        onChange={(e) => dispatch(setSubjectLineB(e.target.value))}
        fullWidth
      />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Preview</Typography>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography>{subjectLineA}</Typography>
          <Typography>{subjectLineB}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TextFieldComponent;
