"use client";
import React, { useMemo } from "react";
import { Container, Stack, Chip, Avatar, Typography } from "@mui/material";
import { createAvatar } from "@dicebear/core";
import { thumbs } from "@dicebear/collection";

import { Participant } from "@/types/feelinks";

interface StatsContainerProps {
  participants: Participant[];
}

const StatsContainer = ({ participants }: StatsContainerProps) => {
  const particapantBadges = useMemo(() => {
    const badges = participants.map((participant, index) => {
      const avatar = createAvatar(thumbs, {
        seed: participant.name
        // ... other options
      });

      const svg = avatar.toDataUri();
      const label = (
        <span>
          {participant.name} |{" "}
          <strong style={{ color: "green" }}>{participant.score.correct}</strong> - {" "}
          <strong style={{ color: "red" }}>{participant.score.wrong}</strong>
        </span>
      );
      return (
        <Chip
          key={index}
          label={label}
          avatar={<Avatar src={svg} />}
          color="primary"
          variant="outlined"
          size="medium"
        />
      );
    });
    return badges;
  }, [participants]);

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
      <Stack direction="column" gap={2}>
        <Typography variant="h6">Stat for nerds</Typography>
        <Stack direction="row" gap={1} flexWrap="wrap">
          {particapantBadges}
        </Stack>
      </Stack>
    </Container>
  );
};

export default StatsContainer;
