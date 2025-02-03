"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Container, Stack, Typography, Button, CircularProgress } from "@mui/material";
import EmotionContainer from "../components/EmotionContainer";
import { getGameData, shuffleArray } from "@/utils/helper";
import StatsContainer from "../components/StatsContainer";
import { Participant } from "@/types/feelinks";

// help me add the right MUI icon for each category
const categories = [
  { name: "Family", icon: "👪" },
  { name: "Friend", icon: "👫" },
  { name: "School", icon: "🏫" },
  { name: "Social", icon: "🤝" },
  { name: "Work", icon: "💼" },
  { name: "Entertainment", icon: "🎉" }
];

export default function FeelinksBoardPage() {
  const [generatedQuestion, setGeneratedQuestion] = useState(
    "Please select a category to generate question."
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [participants, setParticipants] = useState<Participant[]>([]);

  let startIndex = 0;
  const currentPlayer = useMemo(() => {
    // do not change index at first trigger, but fine to change it after
    // the first trigger

    if (startIndex !== 0) {
      startIndex++;
    }
    return participants[startIndex]?.name;
  }, [participants, setSelectedCategory]);

  function handleClickCategory(category: string) {
    setSelectedCategory(category);
  }

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
      fetch(process.env.NEXT_PUBLIC_AI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          category: selectedCategory
        })
      })
        .then((response) => response.json())
        .then((response) => {
          setGeneratedQuestion(response.data);
        })
        .catch((err) => {
          setGeneratedQuestion("Something went wrong, please try again.");
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
          setSelectedCategory("");
        });
    }
  }, [selectedCategory]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {/* Header Section */}
        <Stack spacing={1}>
          <Typography variant="h5">Welcome to Feelinks AI – A Game of Emotions! 🥰</Typography>
          <Typography variant="body1">
            Explore your emotions in a fun and engaging way. Each round, you&apos;ll encounter
            unique scenarios and choose how you&apos;d feel. Play with friends, discuss your
            choices, and discover new perspectives!
          </Typography>
          <Typography variant="h6">
            Player Turn: {currentPlayer}
          </Typography>
        </Stack>

        {/* Main Content Area */}
        <Stack direction="row" spacing={2}>
          {/* Left Section */}
          <Stack width="50%" spacing={2}>
            {/* Question Panel */}
            <Container
              sx={{
                mt: 4,
                p: 4,
                border: "1px solid white",
                borderRadius: "8px",
                height: "100%"
              }}
            >
              <Typography variant="h5">
                {isLoading ? (
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h5">Generating...</Typography>
                    <CircularProgress size={24} />
                  </Stack>
                ) : (
                  generatedQuestion
                )}
              </Typography>
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
                        sx={{ flex: 1 }}
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
                        sx={{ flex: 1 }}
                        onClick={() => handleClickCategory(category.name)}
                      >
                        {category.name}
                      </Button>
                    );
                  })}
                </Stack>
              </Stack>
            </Container>
          </Stack>

          {/* Right Section */}
          <Stack width="50%" spacing={2}>
            <EmotionContainer
              category={selectedCategory}
              participants={participants}
              onParticipantChange={setParticipants}
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
