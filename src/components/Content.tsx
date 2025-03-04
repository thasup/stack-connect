import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FrostGlassBox from "@/components/FrostGlassBox";
interface Item {
  icon: React.JSX.Element;
  title: string;
  description: string | React.JSX.Element;
}

interface ContentProps {
  title: string;
  items: Item[];
}

export default function Content(props: ContentProps) {
  const { title, items } = props;
  return (
    <Stack sx={{ flexDirection: "column", alignSelf: "center", gap: 4, width: "100%" }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "medium",
            textShadow: "0 2px 4px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.3)"
          }}
        >
          {title}
        </Typography>
      </Box>
      {items.map((item, index) => (
        <FrostGlassBox key={index}>
          <Stack direction="row" sx={{ gap: 2 }}>
            {item.icon}
            <div>
              <Typography gutterBottom sx={{ fontWeight: "medium", color: "white" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {item.description}
              </Typography>
            </div>
          </Stack>
        </FrostGlassBox>
      ))}
    </Stack>
  );
}
