"use client";
import React, { useEffect, useState } from "react";
import { Container, Stack, Typography, Button, CircularProgress } from "@mui/material";
import EmotionContainer from "../components/EmotionContainer";
import { setGameData } from "@/utils/helper";

const participants = ["P'First", "N'Jane", "MM", "JJ", "CS", "JN", "IR", "SJ", "PA"];

const categories = ["Family", "Friend", "School", "Social", "Work", "Travel"];

export default function BoardPage() {
  const firstCategoryRow = categories.slice(0, 3);
  const secondCategoryRow = categories.slice(3, 6);

  const [generatedQuestion, setGeneratedQuestion] = useState(
    "Select category to generate question"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const modifiedGameData = participants.map((participant) => {
    return {
      name: participant,
      score: {
        correct: 0,
        wrong: 0
      }
    };
  });

  function handleClickCategory(category: string) {
    if (!selectedCategory) {
      setGameData({participants: modifiedGameData});
    }
    setSelectedCategory(category);
  }

  useEffect(() => {
    if (selectedCategory) {
      try {
        setIsLoading(true);
        fetch("http://localhost:9999/v1/stack-connect", {
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
            console.log("🚀 ~ ).then ~ response:", response);
            setGeneratedQuestion(response.data);
            setIsLoading(false);
          });
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
  }, [selectedCategory]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        {/* Header Section */}
        <Stack spacing={1}>
          <Typography variant="h5">Welcome to Feelinks AI – A Game of Emotions! 🥰</Typography>
          <Typography variant="body1">Explore your emotions in a fun and engaging way. Each round, you&apos;ll encounter unique scenarios and choose how you&apos;d feel. Play with friends, discuss your choices, and discover new perspectives!</Typography>
        </Stack>

        {/* Main Content Area */}
        <Stack direction="row" spacing={2}>
          {/* Left Section */}
          <Stack width="50%" spacing={2}>
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

            <Container
              maxWidth="md"
              sx={{ mt: 4, p: 4, border: "1px solid white", borderRadius: "8px" }}
            >
              <Stack direction="column" spacing={2}>
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
          <Stack width="50%" spacing={1}>
            <EmotionContainer category={selectedCategory} />
          </Stack>
        </Stack>

        {/* Bottom Section */}
        <Stack spacing={1}>
          <Typography variant="h6">Bottom Section</Typography>
          <Button variant="contained" fullWidth>
            Bottom Action
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
