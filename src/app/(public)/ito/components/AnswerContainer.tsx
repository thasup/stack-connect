"use client";
import React from "react";
import { Container, Stack, Typography } from "@mui/material";

interface AnswerContainerProps {
  label: {
    least: string;
    most: string;
  };
}

const AnswerContainer = ({ label }: AnswerContainerProps) => {
  return (
    <Stack spacing={2} sx={{ height: "100%" }}>
      {/* Answer Panel */}
      <Container
        sx={{
          mt: 4,
          p: 4,
          border: "1px solid white",
          borderRadius: "8px",
          height: "100%"
        }}
      >
        <Stack direction="column" gap={2}>
          <Typography variant="h6">Label</Typography>
          <Typography variant="h5">The Least (1): {label.least}</Typography>
          <Typography variant="h5">The Most (100): {label.most}</Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AnswerContainer;
