"use client";

import * as React from "react";
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import Content from "@/components/Content";
import { ROUTE } from "@/types/common";
import RegisterContainer from "@/components/RegisterContainer";
import LobbyLayout from "@/components/layouts/LobbyLayout";

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
    <LobbyLayout backgroundImage="https://res.cloudinary.com/thasup/image/upload/v1740741438/central/landscape/justin-bisson-beck-YwFHhIgG77M-unsplash_iljp5o.jpg">
      <Content
        title="💖 Feelinks"
        items={items}
      />
      <RegisterContainer link={ROUTE.FEELINKS.SUB_PAGE.BOARD.PATH} />
    </LobbyLayout>
  );
}
