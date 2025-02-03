"use client";
import React, { useState, useEffect } from "react";
import { Button, Typography, Container, Stack } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const TIME_LEFT = 60;

const Timer = () => {
  const [seconds, setSeconds] = useState(TIME_LEFT); // 60 seconds
  const [isActive, setIsActive] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsTimeout(true);
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
    setIsTimeout(false);
    setSeconds(TIME_LEFT); // Reset back to 60 seconds
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 4,
        p: 4,
        border: "1px solid white",
        borderRadius: "8px"
      }}
    >
      <Stack flexDirection="row" width="100%" gap={2} justifyContent="center" alignItems="center">
        {isTimeout ? (
          <Typography variant="h6" color="error">
            Time out!
          </Typography>
        ) : (
          <Typography variant="h6">{`Time Remaining: ${Math.floor(seconds / 60)}:${(
            "0" +
            (seconds % 60)
          ).slice(-2)}`}</Typography>
        )}
        {!isActive && (
          <Button variant="contained" onClick={startTimer} style={{ marginTop: "0" }}>
            {isTimeout ? (
              <Stack flexDirection="row" gap={1} justifyContent="center" alignItems="center">
                <AccessAlarmIcon />
                <Typography variant="body1">Reset</Typography>
              </Stack>
            ) : (
              <AccessAlarmIcon />
            )}
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Timer;
