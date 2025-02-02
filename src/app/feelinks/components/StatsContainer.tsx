"use client";
import React from "react";
import { Container, Stack, Chip, Avatar } from "@mui/material";
import { Participant } from "@/types/feelinks";

interface StatsContainerProps {
  participants: Participant[];
}

const StatsContainer = ({ participants }: StatsContainerProps) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        p: 4,
        border: "1px solid white",
        borderRadius: "8px",
        minHeight: "200px"
      }}
    >
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {participants.map((participant, index) => (
          <Chip
            key={index}
            label={`${participant.name} - ${participant.score.correct}`}
            avatar={<Avatar src="/static/images/avatar/1.jpg" />}
            color="primary"
            variant="outlined"
            size="medium"
          />
        ))}
      </Stack>
    </Container>
  );
};

export default StatsContainer;
