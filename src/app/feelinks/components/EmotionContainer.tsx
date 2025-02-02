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
import { getGameData, setGameData, updateScore } from "@/utils/helper";

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

interface EmotionContainerProps {
  category: string;
}

interface Participant {
  name: string;
  score: {
    correct: number;
    wrong: number;
  };
  answer?: string;
}

const EmotionContainer = ({ category }: EmotionContainerProps) => {
  const [positiveEmotions, setPositiveEmotions] = useState<string[]>([]);
  const [negativeEmotions, setNegativeEmotions] = useState<string[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [selectedParticipant, setSelectedParticipant] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [correctEmotion, setCorrectEmotion] = useState("");

  function handleParticipantChange(event: SelectChangeEvent) {
    setSelectedParticipant(event.target.value);
  };

  function handleEmotionChange(event: SelectChangeEvent) {
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

  const handleSubmit = () => {
    const updatedParticipants = participants.map((participant) => {
      if (participant.name === selectedParticipant) {
        return {
          ...participant,
          answer: selectedEmotion
        };
      }
      return participant;
    });
    setParticipants(updatedParticipants);
    setSelectedParticipant("");
    setSelectedEmotion("");
  };

  function handleAnnoncement() {
    if (participants) {
      const gameData = getGameData();
      const participant = gameData.participants.find((person) => person.name === selectedParticipant);
      if (participant) {
        if (correctEmotion === selectedEmotion) {
          participant.score.correct++;
          updateScore(selectedParticipant, true);
          const updatedParticipants = participants.map((person) => {
            if (person.name === selectedParticipant) {
              return {
                ...person,
                score: {
                  ...person.score,
                  correct: person.score.correct + 1,
                }
              };
            }
            return person;
          });
          setParticipants(updatedParticipants);
        } else {
          participant.score.wrong++;
          updateScore(selectedParticipant, false);
          const updatedParticipants = participants.map((person) => {
            if (person.name === selectedParticipant) {
              return {
                ...person,
                score: {
                  ...person.score,
                  wrong: person.score.wrong + 1,
                }
              };
            }
            return person;
          });
          setParticipants(updatedParticipants);
        }
      }

      setGameData(gameData);
    }
  }

  function handleCorrectEmotionChange(emotion: string) {
    setCorrectEmotion(emotion);
    handleAnnoncement();
  };

  useEffect(() => {
    const { positive, negative } = pickRandomEmotions(allPositiveEmotions, allNegativeEmotions);
    setPositiveEmotions(positive);
    setNegativeEmotions(negative);

    const gameData = getGameData();
    setParticipants(gameData.participants);
  }, [category]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {/* Emotion Panel */}
        <Stack direction="row" spacing={1}>
          {/* Using Stack to arrange buttons in two columns */}
          <Stack direction="column" spacing={1} flexGrow={1}>
            {positiveEmotions.map((emotion, index) => (
              <Button key={index} variant="outlined" fullWidth onClick={() => handleCorrectEmotionChange(emotion)}>
                {emotion}
              </Button>
            ))}
          </Stack>
          <Stack direction="column" spacing={1} flexGrow={1}>
            {negativeEmotions.map((emotion, index) => (
              <Button key={index} variant="outlined" fullWidth onClick={() => handleCorrectEmotionChange(emotion)}>
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
                  <MenuItem key={participant.name} value={participant.name}>
                    {participant.name}
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

            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default EmotionContainer;
