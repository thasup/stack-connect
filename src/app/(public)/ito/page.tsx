import * as React from "react";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import Content from "@/components/Content";
import RegisterContainer from "@/components/RegisterContainer";
import { ROUTE } from "@/types/common";
import LobbyLayout from "@/components/layouts/LobbyLayout";

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
    <LobbyLayout>
      <Content
        title="🎲 ITO"
        items={items}
      />
      <RegisterContainer link={ROUTE.ITO.SUB_PAGE.GAME.PATH} />
    </LobbyLayout>
  );
}
