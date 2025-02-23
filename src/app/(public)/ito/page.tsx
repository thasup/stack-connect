import * as React from "react";
import Stack from "@mui/material/Stack";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import Content from "@/components/Content";
import RegisterContainer from "@/components/RegisterContainer";
import { ROUTE } from "@/types/common";

const items = [
  {
    icon: <EmojiObjectsIcon sx={{ color: "text.secondary" }} />,
    title: "Cooperative Deduction & Intuition",
    description:
      "Work together to rank hidden numbers—but you can only give creative, indirect hints. Can your team crack the code?"
  },
  {
    icon: <PsychologyAltIcon sx={{ color: "text.secondary" }} />,
    title: "Wordplay & Strategy",
    description:
      "Describe numbers in the strangest ways—spiciness, movie titles, or even emotions! Clarity and creativity are key."
  },
  {
    icon: <CelebrationIcon sx={{ color: "text.secondary" }} />,
    title: "Laughs & Surprises",
    description:
      "Misunderstandings and unexpected answers make every round unpredictable, hilarious, and fun!"
  },
  {
    icon: <AutoFixHighIcon sx={{ color: "text.secondary" }} />,
    title: "AI-Enhanced Play",
    description: "With limitless themes and clever twists, no two games are ever the same!"
  }
];

export default function ItoPage() {
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
            title="🎲 ITO"
            items={items}
          />
          <RegisterContainer link={`${ROUTE.ITO}/board`} />
        </Stack>
      </Stack>
    </Stack>
  );
}
