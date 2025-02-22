import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const items = [
  {
    icon: <ForumIcon sx={{ color: "text.secondary" }} />,
    title: "Bluff & Deceive",
    description:
      "In this game of deception, your words are your weapon. Can you fool your friends with a completely made-up answer, or will you sniff out the real truth hiding in a sea of lies?"
  },
  {
    icon: <EmojiObjectsIcon sx={{ color: "text.secondary" }} />,
    title: "Mind-Bending, Bizarre Trivia",
    description:
      "You’ll uncover the most absurd, unbelievable facts—so wild, they must be fake… right? Think again! From ancient laws that still exist today to strange world records no one should be proud of, every round is a test of wit and instinct."
  },
  {
    icon: <CelebrationIcon sx={{ color: "text.secondary" }} />,
    title: "Chaos, Comedy & Unforgettable Moments",
    description:
      "Every session is a wild ride of outrageous claims, hilarious guesses, and jaw-dropping revelations. Whether you’re a master manipulator or just along for the laughs, there’s never a dull moment!"
  },
  {
    icon: <AutoFixHighIcon sx={{ color: "text.secondary" }} />,
    title: "AI-Powered Trickery",
    description:
      "With an ever-growing database of real yet ridiculous facts and AI-crafted fake answers, no two games are ever the same. The game adapts to your playstyle, making sure every round is a fresh and thrilling experience!"
  }
];


export default function Content() {
  return (
    <Stack sx={{ flexDirection: "column", alignSelf: "center", gap: 4, width: "100%" }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "medium" }}>
          🐟 Sounds Fishy
        </Typography>
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: "medium" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
