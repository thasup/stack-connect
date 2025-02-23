import * as React from "react";
import Stack from "@mui/material/Stack";

import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import RegisterContainer from "./components/RegisterContainer";
import Content from "@/components/Content";

const items = [
  {
    icon: <Diversity2RoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Fun & Interactive",
    description:
      "Engage in an exciting emotional intelligence game that sparks conversations and strengthens connections."
  },
  {
    icon: <ColorLensIcon sx={{ color: "text.secondary" }} />,
    title: "Endless Scenarios",
    description:
      "Enjoy a limitless variety of unique scenarios, ensuring that no two sessions feel the same."
  },
  {
    icon: <AutoAwesomeRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Perfect for Any Occasion",
    description:
      "Whether with friends, family, or at a social gathering, Feelinks brings everyone closer together."
  },
  {
    icon: <AutoFixHighIcon sx={{ color: "text.secondary" }} />,
    title: "AI-Powered Creativity",
    description:
      "Every session is fresh, thanks to AI-generated scenarios that adapt to your playstyle."
  }
];

export default function Feelinks() {
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
            title="💖 Feelinks"
            items={items}
          />
          <RegisterContainer />
        </Stack>
      </Stack>
    </Stack>
  );
}
