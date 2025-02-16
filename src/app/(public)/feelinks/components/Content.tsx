import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

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


export default function Content() {
  return (
    <Stack sx={{ flexDirection: "column", alignSelf: "center", gap: 4, width: "100%" }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "medium" }}>
          💖 Feelinks
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
