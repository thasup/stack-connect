"use client";
import React, { useState } from "react";
import { TextField, Button, Container, Stack, Typography, Chip, Avatar } from "@mui/material";
import { createAvatar } from "@dicebear/core";
import { thumbs } from "@dicebear/collection";
import SendIcon from "@mui/icons-material/Send";

import { Participant } from "@/types/feelinks";
import { addParticipant } from "@/utils/helper";
import Link from "next/link";

const RegisterContainer = () => {
  const [formData, setFormData] = useState({
    name: ""
  });
  const [participants, setParticipants] = useState<Participant[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({
      name: value
    });
  };

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!formData.name) {
      return;
    }

    setParticipants([
      ...participants,
      {
        name: formData.name,
        answer: "",
        score: {
          correct: 0,
          wrong: 0
        }
      }
    ]);
    addParticipant(formData.name);
    setFormData({
      name: ""
    });
  };

  const avatar = createAvatar(thumbs, {
    seed: "Johnz Doe"
    // ... other options
  });

  const svg = avatar.toString();

  return (
    <Stack flexDirection="column" spacing={2}>
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          p: 4,
          border: "1px solid white",
          borderRadius: "8px"
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add
          </Button>
          <Link href="/feelinks/board">
            <Button fullWidth variant="outlined" endIcon={<SendIcon />}>
              Proceed
            </Button>
          </Link>
        </Stack>
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          p: 4,
          border: "1px solid white",
          borderRadius: "8px"
        }}
      >
        <Stack flexDirection="row" alignItems="center" gap={1}>
          {participants.map((participant, index) => (
            <Chip
              key={index}
              label={participant.name}
              avatar={<Avatar src={svg} />}
              color="primary"
              variant="outlined"
              size="medium"
            />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default RegisterContainer;
