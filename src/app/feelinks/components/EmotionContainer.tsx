"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Stack,
  Button,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

const allPositiveEmotions = [
  "Happiness",
  "Love",
  "Excitement",
  "Pride",
  "Gratitude",
  "Confidence",
  "Amusement",
  "Hope"
];

const allNegativeEmotions = [
  "Sadness",
  "Anger",
  "Fear",
  "Frustration",
  "Guilt",
  "Loneliness",
  "Jealousy",
  "Disgust"
];

const participants = ["P'First", "N'Jane", "MM", "JJ", "CS", "JN", "IR", "SJ", "PA"];

interface EmotionContainerProps {
  category: string;
}
const EmotionContainer = ({ category }: EmotionContainerProps) => {
  const [positiveEmotions, setPositiveEmotions] = useState<string[]>([]);
  const [negativeEmotions, setNegativeEmotions] = useState<string[]>([]);
  const [selectedParticipant, setSelectedParticipant] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");

  const handleParticipantChange = (event: SelectChangeEvent) => {
    setSelectedParticipant(event.target.value);
  };

  const handleEmotionChange = (event: SelectChangeEvent) => {
    setSelectedEmotion(event.target.value);
  };

  function pickRandomEmotions(
    positiveEmotions: string[],
    negativeEmotions: string[]
  ): { positive: string[]; negative: string[] } {
    const randomPositiveEmotions = positiveEmotions
      .map((emotion) => ({ emotion, rand: Math.random() }))
      .sort((a, b) => a.rand - b.rand)
      .slice(0, 4)
      .map((obj) => obj.emotion);

    const randomNegativeEmotions = negativeEmotions
      .map((emotion) => ({ emotion, rand: Math.random() }))
      .sort((a, b) => a.rand - b.rand)
      .slice(0, 4)
      .map((obj) => obj.emotion);

    return { positive: randomPositiveEmotions, negative: randomNegativeEmotions };
  }

  function handleSubmit() {
    console.log("Selected Participant:", selectedParticipant);
    console.log("Selected Emotion:", selectedEmotion);
    // Add your submission logic here
    setSelectedParticipant("");
    setSelectedEmotion("");
  }

  useEffect(() => {
    const { positive, negative } = pickRandomEmotions(allPositiveEmotions, allNegativeEmotions);
    setPositiveEmotions(positive);
    setNegativeEmotions(negative);
  }, [category]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {/* Emotion Panel */}
        <Stack direction="row" spacing={1}>
          {/* Using Stack to arrange buttons in two columns */}
          <Stack direction="column" spacing={1} flexGrow={1}>
            {positiveEmotions.map((emotion, index) => (
              <Button key={index} variant="outlined" fullWidth>
                {emotion}
              </Button>
            ))}
          </Stack>
          <Stack direction="column" spacing={1} flexGrow={1}>
            {negativeEmotions.map((emotion, index) => (
              <Button key={index} variant="outlined" fullWidth>
                {emotion}
              </Button>
            ))}
          </Stack>
        </Stack>

        {/* Paticipant Panel */}
        <Container sx={{ mt: 4, p: 4, border: "1px solid white", borderRadius: "8px" }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="participant-select-label">Participants</InputLabel>
              <Select
                labelId="participant-select-label"
                id="participant-select"
                value={selectedParticipant}
                label="Participant"
                onChange={handleParticipantChange}
              >
                {participants.map((participant) => (
                  <MenuItem key={participant} value={participant}>
                    {participant}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="emotion-select-label">Emotions</InputLabel>
              <Select
                labelId="emotion-select-label"
                id="emotion-select"
                value={selectedEmotion}
                label="Emotions"
                onChange={handleEmotionChange}
              >
                {[...positiveEmotions, ...negativeEmotions].map((emotion) => (
                  <MenuItem key={emotion} value={emotion}>
                    {emotion}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default EmotionContainer;
