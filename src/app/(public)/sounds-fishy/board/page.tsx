"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Container, Stack, Typography, Button, CircularProgress, TextField } from "@mui/material";
import { getGameData, resetGameData, shuffleArray } from "@/utils/helper";
import StatsContainer from "../components/StatsContainer";
import { Participant } from "@/types/feelinks";
import AudioPlayer from "@/components/AudioPlayer";
import { useRouter } from "next/navigation";
import { SoundsFishyResponse, SoundsFishyScenario } from "@/types/sounds-fishy";
import AnswerContainer from "../components/AnswerContainer";
import { ROUTE } from "@/types/common";
import SendIcon from "@mui/icons-material/Send";

// help me add the right MUI icon for each category
const categories = [
  { name: "General Knowledge", icon: "🧠" },
  { name: "Pop Culture", icon: "🎬" },
  { name: "Science & Nature", icon: "🌍" },
  { name: "History", icon: "📜" },
  { name: "Geography", icon: "🌍" },
  { name: "Random Fun", icon: "🎲" }
];

const SERVER_DELAY_TIME_LIMIT = 10000;

export default function SoundsFishyBoardPage() {
  const router = useRouter();
  const [generatedQuestion, setGeneratedQuestion] = useState(
    "Please select a category to generate question."
  );
  const [isLoading, setIsLoading] = useState(false);
  const [sound, setSound] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [answer, setAnswer] = useState("");
  const [fact, setFact] = useState("");
  const [loadingText, setLoadingText] = useState("Generating...");
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [playerIndex, setPlayerIndex] = useState(0);

  const currentPlayer = useMemo(() => {
    // if (playerIndex > participants.length - 1) {
    //   return "You're reach the end of the Game! 🎉";
    // }
    // return `Player Turn: ${participants[playerIndex]?.name}`;
    return "Player Turn: WIP..."
  }, [participants, playerIndex]);

  function handleClickCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleEndGame() {
    resetGameData();
    router.push(ROUTE.SOUNDS_FISHY);
  }

  function handleSubmitCustomCategory() {
    setSelectedCategory(customCategory);
  }

  useEffect(() => {
    setLoadingText("Generating...");
    let timeoutId: NodeJS.Timeout | null = null;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setLoadingText("Please wait, we're waking our lazy server...");
      }, SERVER_DELAY_TIME_LIMIT);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading]);

  useEffect(() => {
    // retrieve participants from local storage
    const storedData = getGameData();
    const modifiedGameData = storedData.participants.map((participant) => {
      return {
        name: participant.name,
        score: participant.score
      };
    });
    const shuffledGameData = shuffleArray(modifiedGameData);
    setParticipants(shuffledGameData);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_AI_ENDPOINT}/sounds-fishy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          category: selectedCategory,
          lang: "th"
        })
      })
        .then((response) => response.json())
        .then((response: SoundsFishyResponse) => {
          const audioUrl = `data:audio/mp3;base64,${response.questionAudio}`;
          const parsedScenario: SoundsFishyScenario = JSON.parse(response.scenario);
          setGeneratedQuestion(parsedScenario.question);
          setAnswer(parsedScenario.answer);
          setFact(parsedScenario.reference);
          setSound(audioUrl);
        })
        .catch((err) => {
          setGeneratedQuestion("Something went wrong, please try again.");
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
          setSelectedCategory("");
          setCustomCategory("");
        });
    }
  }, [selectedCategory]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {/* Header Section */}
        <Stack spacing={1}>
          <Typography variant="h5">Welcome to Sounds Fishy – A Game of Deception! 🐟</Typography>
          <Typography variant="body1">
            Bluff, guess, and uncover the truth in this fun trivia game. Play with friends, create
            fake answers, and see if you can outwit the Guesser!
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Typography variant="h6">{currentPlayer}</Typography>
            <Button
              variant="outlined"
              color="error"
              sx={{ flex: 1, wordBreak: "break-word", maxWidth: "fit-content" }}
              onClick={handleEndGame}
            >
              End Game
            </Button>
          </Stack>
        </Stack>

        {/* Main Content Area */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          {/* Left Section */}
          <Stack sx={{ width: { xs: "100%", md: "50%" } }} spacing={2}>
            {/* Question Panel */}
            <Container
              sx={{
                mt: 4,
                p: 4,
                border: "1px solid white",
                borderRadius: "8px",
                height: "100%",
                position: "relative"
              }}
            >
              <Typography variant="h5">
                {isLoading ? (
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h5">{loadingText}</Typography>
                    <CircularProgress size={24} />
                  </Stack>
                ) : (
                  generatedQuestion
                )}
              </Typography>
              {}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  right: "15px",
                  cursor: "pointer"
                }}
              >
                <AudioPlayer audioUrl={sound} />
              </div>
            </Container>

            {/* Category Panel */}
            <Container
              maxWidth="md"
              sx={{ mt: 4, p: 4, border: "1px solid white", borderRadius: "8px" }}
            >
              <Stack direction="column" spacing={2} justifyContent="center" height="100%">
                <Typography variant="h6">Select one of categories</Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  {categories.slice(0, 3).map((category) => {
                    return (
                      <Button
                        key={category.name}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1, wordBreak: "break-word" }}
                        disabled={isLoading}
                        onClick={() => handleClickCategory(category.name)}
                      >
                        {category.name}
                      </Button>
                    );
                  })}
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center">
                  {categories.slice(3, 6).map((category) => {
                    return (
                      <Button
                        key={category.name}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1, wordBreak: "break-word" }}
                        disabled={isLoading}
                        onClick={() => handleClickCategory(category.name)}
                      >
                        {category.name}
                      </Button>
                    );
                  })}
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <TextField
                    required
                    id="outlined-required"
                    label="Custom Category"
                    sx={{ width: "100%" }}
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={handleSubmitCustomCategory}
                  >
                    <SendIcon />
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </Stack>

          {/* Right Section */}
          <Stack sx={{ width: { xs: "100%", md: "50%" } }} spacing={2}>
            <AnswerContainer
              question={generatedQuestion}
              answer={answer}
              fact={fact}
            />
          </Stack>
        </Stack>

        {/* Bottom Section */}
        <Stack spacing={2}>
          <StatsContainer participants={participants} />
        </Stack>
      </Stack>
    </Container>
  );
}
