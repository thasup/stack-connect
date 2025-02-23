import * as React from "react";
import Stack from "@mui/material/Stack";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

import Content from "@/components/Content";
import RegisterContainer from "./components/RegisterContainer";

const items = [
  {
    icon: <ForumIcon sx={{ color: "text.secondary" }} />,
    title: "Bluff & Deceive",
    description: (
      <>
        <p>In this game of deception, your words are your weapon.</p>
        <p>Can you fool your friends with a completely made-up answer, or will you sniff out the real truth hiding in a sea of lies?</p>
      </>
    )
  },
  {
    icon: <EmojiObjectsIcon sx={{ color: "text.secondary" }} />,
    title: "Mind-Bending, Bizarre Trivia",
    description: (
      <>
        <p>From ancient laws that still exist today to strange world records no one should be proud of, every round is a test of wit and instinct.</p>
      </>
    )
  },
  {
    icon: <CelebrationIcon sx={{ color: "text.secondary" }} />,
    title: "Chaos, Comedy & Unforgettable Moments",
    description: (
      <>
        <p>Every session is a wild ride of outrageous claims, hilarious guesses, and jaw-dropping revelations.</p>
        <p>Whether you’re a master manipulator or just along for the laughs, there’s never a dull moment!</p>
      </>
    )
  },
  {
    icon: <AutoFixHighIcon sx={{ color: "text.secondary" }} />,
    title: "AI-Powered Trickery",
    description: (
      <>
        <p>With an ever-growing database of real yet ridiculous facts and AI-crafted fake answers, no two games are ever the same.</p>
        <p>The game adapts to your playstyle, making sure every round is a fresh and thrilling experience!</p>
      </>
    )
  }
];

export default function SoundsFishy() {
  return (
    <Stack
      direction="column"
      component="main"
      sx={[
        {
          justifyContent: "center",
          height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
          marginTop: "max(40px - var(--template-frame-height, 0px), 0px)",
          minHeight: "100%"
        }
      ]}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          justifyContent: "center",
          gap: { xs: 6, sm: 12 },
          p: 2,
          mx: "auto"
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 6, sm: 12 },
            p: { xs: 2, sm: 4 },
            m: "auto"
          }}
        >
          <Content
            title="🐟 Sounds Fishy"
            items={items}
          />
          <RegisterContainer />
        </Stack>
      </Stack>
    </Stack>
  );
}
