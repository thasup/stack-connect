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

const cardTheme = [
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

  const randomTheme = cardTheme[Math.floor(Math.random() * cardTheme.length)];

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
                borderRadius: "16px",
              }}
            />
          ) : (
            <Card
              sx={{
                backgroundColor: randomTheme.primaryBackground,
                borderRadius: "16px",
                padding: "16px",
                minHeight: "300px",
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
                        <Typography variant="h5" fontWeight={700}>{loadingText}</Typography>
                        <CircularProgress size={24} />
                      </Stack>
                    ) : (
                      question
                    )}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "100%" }}>
                    {labels.map((label, index) => (
                      <Box key={index}>
                        <Stack
                          direction="column"
                          alignItems="center"
                          gap={2}
                        >
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
        </Stack>
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            cursor: "pointer"
          }}
        >
          {sound && (<AudioPlayer audioUrl={sound} />)}
        </div>
      </Container>
    </Stack>
  );
}
