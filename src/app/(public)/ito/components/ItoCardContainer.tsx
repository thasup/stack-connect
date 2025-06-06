"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Stack,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CircularProgress,
  Skeleton
} from "@mui/material";
import AudioPlayer from "@/components/AudioPlayer";

interface ItoCardContainerProps {
  question: string;
  sound: string;
  label: {
    least: string;
    most: string;
  };
  disabled: boolean;
}

interface CardTheme {
  primaryBackground: string;
  secondaryBackground: string;
  questionText: string;
  labelText: string;
}

const cardTheme: CardTheme[] = [
  {
    primaryBackground: "#f5cf39",
    secondaryBackground: "#fff",
    questionText: "#454546",
    labelText: "#454546"
  },
  {
    primaryBackground: "#fff",
    secondaryBackground: "#454546",
    questionText: "#fff",
    labelText: "#454546"
  },
  {
    primaryBackground: "#454546",
    secondaryBackground: "#f5cf39",
    questionText: "#fff",
    labelText: "#fff"
  }
];
const SERVER_DELAY_TIME_LIMIT = 10000;

export default function ItoCardContainer({
  question,
  sound,
  label,
  disabled
}: ItoCardContainerProps) {
  const [loadingText, setLoadingText] = useState("Generating...");

  const randomTheme = useMemo(() => {
    return cardTheme[Math.floor(Math.random() * cardTheme.length)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  function getBoxShadow(theme: CardTheme) {
    switch (theme) {
      case cardTheme[0]: // Light background with yellow
        return `
          0 2px 4px rgba(0, 0, 0, 0.3),
          0 4px 10px rgba(255, 230, 0, 0.3)
        `;

      case cardTheme[1]: // Dark background with white text
        return `
          0 2px 4px rgba(0, 0, 0, 0.3),
          0 4px 10px rgba(255, 255, 255, 0.2)
        `;

      case cardTheme[2]: // Dark background with yellow accents
        return `
          0 2px 4px rgba(0, 0, 0, 0.3),
          0 4px 10px rgba(255, 230, 0, 0.3)
        `;

      default:
        return `
          0 2px 4px rgba(0, 0, 0, 0.3),
          0 4px 10px rgba(255, 230, 0, 0.3)
        `;
    }
  }

  useEffect(() => {
    setLoadingText("Generating...");
    let timeoutId: NodeJS.Timeout | null = null;
    if (disabled) {
      timeoutId = setTimeout(() => {
        setLoadingText("Please wait, we're waking our lazy server...");
      }, SERVER_DELAY_TIME_LIMIT);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [disabled]);

  const labels = useMemo(() => {
    return [
      {
        label: label.least,
        value: 1
      },
      {
        label: label.most,
        value: 100
      }
    ];
  }, [label]);

  return (
    <Stack spacing={2} sx={{ height: "100%" }}>
      {/* Card Panel */}
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
        <Stack direction="column" gap={2}>
          <Typography variant="h6">Question Card</Typography>
          {disabled ? (
            <Skeleton
              variant="rounded"
              width="100%"
              height={300}
              sx={{
                borderRadius: "16px"
              }}
            />
          ) : (
            <Card
              sx={{
                backgroundColor: randomTheme.primaryBackground,
                borderRadius: "16px",
                padding: "16px",
                minHeight: "300px",
                boxShadow: getBoxShadow(randomTheme),
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow:
                    randomTheme.primaryBackground === "#f5cf39"
                      ? `
                          0 4px 8px rgba(0, 0, 0, 0.4),
                          0 8px 16px rgba(255, 230, 0, 0.5)
                        `
                      : randomTheme.primaryBackground === "#fff"
                      ? `
                          0 4px 8px rgba(0, 0, 0, 0.4),
                          0 8px 16px rgba(0, 0, 0, 0.3)
                        `
                      : `
                          0 4px 8px rgba(0, 0, 0, 0.4),
                          0 8px 16px rgba(255, 230, 0, 0.5)
                        `
                }
              }}
            >
              <CardContent sx={{ height: "100%", p: "16px" }}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    sx={{
                      width: "100%",
                      fontWeight: 700,
                      lineHeight: "1.5",
                      color: randomTheme.questionText,
                      backgroundColor: randomTheme.secondaryBackground,
                      borderRadius: "32px 32px 0 32px",
                      padding: "16px",
                      textTransform: "uppercase",
                      textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)"
                    }}
                  >
                    {disabled ? (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="h5" fontWeight={700}>
                          {loadingText}
                        </Typography>
                        <CircularProgress size={24} />
                      </Stack>
                    ) : (
                      question
                    )}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "100%" }}
                  >
                    {labels.map((label, index) => (
                      <Box key={index}>
                        <Stack direction="column" alignItems="center" gap={2}>
                          <Typography
                            variant="body1"
                            align="center"
                            sx={{
                              color: randomTheme.labelText,
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)"
                            }}
                          >
                            {label.label}
                          </Typography>
                          <Button
                            variant="outlined"
                            sx={{
                              borderRadius: "50%",
                              fontWeight: "bold",
                              fontSize: "28px",
                              width: "60px",
                              height: "60px",
                              borderColor: "#454546",
                              color: randomTheme.questionText,
                              backgroundColor: randomTheme.secondaryBackground
                            }}
                          >
                            {label.value}
                          </Button>
                        </Stack>
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          )}
          <Typography variant="h5">
            {disabled && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h5" fontWeight={700}>
                  {loadingText}
                </Typography>
                <CircularProgress size={24} />
              </Stack>
            )}
          </Typography>
        </Stack>
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            cursor: "pointer"
          }}
        >
          {sound && <AudioPlayer audioUrl={sound} />}
        </div>
      </Container>
    </Stack>
  );
}
