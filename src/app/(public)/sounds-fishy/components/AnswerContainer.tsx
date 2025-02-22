"use client";
import React, { useEffect, useState } from "react";
import { Container, Stack, Button, Typography } from "@mui/material";

interface AnswerContainerProps {
  question: string;
  answer: string;
  fact: string;
  disabled: boolean;
}

const AnswerContainer = ({ question, answer, fact, disabled }: AnswerContainerProps) => {
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    if (!question) {
      return;
    }
    setIsShowAnswer(false);
  }, [question]);

  return (
    <Stack spacing={2} sx={{ height: "100%" }}>
      {/* Answer Panel */}
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
          <Stack direction="row" gap={2} justifyContent="space-between">
            <Typography variant="h6">Reveal the Answer</Typography>
            <Button
              variant="contained"
              disabled={disabled}
              onClick={() => setIsShowAnswer(!isShowAnswer)}
            >
              {isShowAnswer ? "Hide Answer" : "Show Answer"}
            </Button>
          </Stack>
          {isShowAnswer && <Typography variant="h6">{answer}</Typography>}
        </Stack>
      </Container>

      {/* Fact Panel */}
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
          <Stack direction="row" gap={2} justifyContent="space-between">
            <Typography variant="h6">Fact</Typography>
          </Stack>
          {isShowAnswer && <Typography variant="h6">{fact}</Typography>}
        </Stack>
      </Container>
    </Stack>
  );
};

export default AnswerContainer;
