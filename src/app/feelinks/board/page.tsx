"use client";
import React, { useEffect, useState } from "react";
import { Container, Stack, Typography, Button, CircularProgress } from "@mui/material";
import EmotionContainer from "../components/EmotionContainer";
import { getGameData } from "@/utils/helper";
import StatsContainer from "../components/StatsContainer";
import { Participant } from "@/types/feelinks";

const categories = ["Family", "Friend", "School", "Social", "Work", "Entertainment"];

export default function BoardPage() {
  const firstCategoryRow = categories.slice(0, 3);
  const secondCategoryRow = categories.slice(3, 6);

  const [generatedQuestion, setGeneratedQuestion] = useState(
    "Please select a category to generate question."
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [participants, setParticipants] = useState<Participant[]>([]);

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
    setParticipants(modifiedGameData);
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
                minHeight: "200px"
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
              sx={{ mt: 4, p: 4, border: "1px solid white", borderRadius: "8px", height: "100%" }}
            >
              <Stack direction="column" spacing={2} justifyContent="center" height="100%">
                <Stack direction="row" spacing={2} justifyContent="center">
                  {firstCategoryRow.map((category) => {
                    return (
                      <Button
                        key={category}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1 }}
                        onClick={() => handleClickCategory(category)}
                      >
                        {category}
                      </Button>
                    );
                  })}
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center">
                  {secondCategoryRow.map((category) => {
                    return (
                      <Button
                        key={category}
                        variant="outlined"
                        fullWidth
                        sx={{ flex: 1 }}
                        onClick={() => handleClickCategory(category)}
                      >
                        {category}
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
