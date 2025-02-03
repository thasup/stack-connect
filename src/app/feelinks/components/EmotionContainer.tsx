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
  MenuItem,
  Chip,
  FormHelperText,
  Typography
} from "@mui/material";
import { getGameData, updateScore } from "@/utils/helper";
import { Emotion, Participant } from "@/types/feelinks";
import SendIcon from "@mui/icons-material/Send";

const allPositiveEmotions = [
  { name: "Love", emoji: "❤️" },
  { name: "Excitement", emoji: "🤩" },
  { name: "Pride", emoji: "🏆" },
  { name: "Confidence", emoji: "💪" },
  { name: "Happiness", emoji: "😊" },
  { name: "Gratitude", emoji: "🙏" },
  { name: "Hope", emoji: "🌟" },
  { name: "Relief", emoji: "😌" }
];

const allNegativeEmotions = [
  { name: "Anger", emoji: "😡" },
  { name: "Disgust", emoji: "🤢" },
  { name: "Loneliness", emoji: "😔" },
  { name: "Sadness", emoji: "😢" },
  { name: "Fear", emoji: "😨" },
  { name: "Guilt", emoji: "😞" },
  { name: "Jealousy", emoji: "🙄" },
  { name: "Frustration", emoji: "😤" }
];

interface EmotionContainerProps {
  category: string;
  participants: Participant[];
  playerIndex: number;
  onParticipantChange: (participants: Participant[]) => void;
  onAnnounce: (playerIndex: number) => void;
}

const EmotionContainer = ({
  category,
  participants,
  playerIndex,
  onParticipantChange,
  onAnnounce
}: EmotionContainerProps) => {
  const [positiveEmotions, setPositiveEmotions] = useState<Emotion[]>([]);
  const [negativeEmotions, setNegativeEmotions] = useState<Emotion[]>([]);

  const [selectedParticipant, setSelectedParticipant] = useState({
    isFocused: false,
    value: ""
  });
  const [selectedEmotion, setSelectedEmotion] = useState({
    isFocused: false,
    value: ""
  });

  function handleParticipantChange(event: SelectChangeEvent) {
    setSelectedParticipant({
      isFocused: false,
      value: event.target.value
    });
  }

  function handleEmotionChange(event: SelectChangeEvent) {
    setSelectedEmotion({
      isFocused: false,
      value: event.target.value
    });
  }

  function pickRandomEmotions(
    positiveEmotions: Emotion[],
    negativeEmotions: Emotion[]
  ): { positive: Emotion[]; negative: Emotion[] } {
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
    if (!selectedParticipant.value || !selectedEmotion.value) {
      setSelectedParticipant({
        isFocused: true,
        value: selectedParticipant.value
      });
      setSelectedEmotion({
        isFocused: true,
        value: selectedEmotion.value
      });
      return;
    }

    const updatedParticipants = participants.map((participant) => {
      if (participant.name === selectedParticipant.value) {
        return {
          ...participant,
          answer: selectedEmotion.value
        };
      }
      return participant;
    });
    onParticipantChange(updatedParticipants);
    setSelectedParticipant({
      isFocused: false,
      value: ""
    });
    setSelectedEmotion({
      isFocused: false,
      value: ""
    });
  };

  function handleAnnoncement(emotion: string) {
    const updatedParticipants = participants.map((participant) => {
      if (participant.answer === emotion) {
        updateScore(participant.name, true);
        return {
          ...participant,
          answer: "",
          score: {
            ...participant.score,
            correct: participant.score.correct + 1
          }
        };
      } else {
        updateScore(participant.name, false);
        return {
          ...participant,
          answer: "",
          score: {
            ...participant.score,
            wrong: participant.score.wrong + 1
          }
        };
      }
    });
    onParticipantChange(updatedParticipants);
    onAnnounce(playerIndex + 1);
  }

  function handleCorrectEmotionChange(emotion: string) {
    handleAnnoncement(emotion);
  }

  function getEmotionCount(emotion: string) {
    return participants.filter((participant) => participant.answer === emotion).length;
  }

  useEffect(() => {
    if (!category) {
      return;
    }

    const { positive, negative } = pickRandomEmotions(allPositiveEmotions, allNegativeEmotions);
    setPositiveEmotions(positive);
    setNegativeEmotions(negative);

    const gameData = getGameData();
    onParticipantChange(gameData.participants);
  }, [category]);

  return (
    <Stack spacing={2} sx={{ height: "100%" }}>
      {/* Emotion Panel */}
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
          <Typography variant="h6">Choose the closest emotion!</Typography>
          <Stack direction="row" spacing={1}>
            <Stack direction="column" spacing={1} flexGrow={1}>
              {positiveEmotions.map((emotion, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  color="success"
                  fullWidth
                  onClick={() => handleCorrectEmotionChange(emotion.name)}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <span>
                      {emotion.emoji} {emotion.name}
                    </span>
                    <Chip
                      label={getEmotionCount(emotion.name)}
                      color="success"
                      variant="filled"
                      size="small"
                    />
                  </Stack>
                </Button>
              ))}
            </Stack>
            <Stack direction="column" spacing={1} flexGrow={1}>
              {negativeEmotions.map((emotion, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  color="error"
                  fullWidth
                  onClick={() => handleCorrectEmotionChange(emotion.name)}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <span>
                      {emotion.emoji} {emotion.name}
                    </span>
                    <Chip
                      label={getEmotionCount(emotion.name)}
                      color="error"
                      variant="filled"
                      size="small"
                    />
                  </Stack>
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* Paticipant Panel */}
      <Container
        sx={{ mt: 4, p: 4, border: "1px solid white", borderRadius: "8px" }}
      >
        <Stack direction="column" gap={2}>
          <Typography variant="h6">Submit an answer</Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              size="small"
              error={selectedParticipant.isFocused && selectedParticipant.value === ""}
            >
              <InputLabel id="participant-select-label">Participants</InputLabel>
              <Select
                labelId="participant-select-label"
                id="participant-select"
                value={selectedParticipant.value}
                label="Participant"
                onChange={handleParticipantChange}
                onFocus={() =>
                  setSelectedParticipant({ isFocused: true, value: selectedParticipant.value })
                }
                onBlur={() =>
                  setSelectedParticipant({ isFocused: false, value: selectedParticipant.value })
                }
              >
                {participants.map((participant) => (
                  <MenuItem key={participant.name} value={participant.name}>
                    {participant.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>

            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              size="small"
              error={selectedEmotion.isFocused && selectedEmotion.value === ""}
            >
              <InputLabel id="emotion-select-label">Emotions</InputLabel>
              <Select
                labelId="emotion-select-label"
                id="emotion-select"
                value={selectedEmotion.value}
                label="Emotions"
                onChange={handleEmotionChange}
                onFocus={() =>
                  setSelectedEmotion({ isFocused: true, value: selectedEmotion.value })
                }
                onBlur={() =>
                  setSelectedEmotion({ isFocused: false, value: selectedEmotion.value })
                }
              >
                {[...positiveEmotions, ...negativeEmotions].map((emotion) => (
                  <MenuItem key={emotion.name} value={emotion.name}>
                    {emotion.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>

            <Button variant="contained" onClick={handleSubmit}>
              <SendIcon />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default EmotionContainer;
