import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "medium" }}>
          {title}
        </Typography>
      </Box>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            marginTop: 2,
            padding: 3,
            borderRadius: (theme) => theme.shape.borderRadius,
            backgroundColor: "rgba(0, 0, 0, 0.25)", // Semi-transparent white
            backdropFilter: "blur(10px)", // Frosted glass effect
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Shadow for depth
            zIndex: 10 // Ensure it is above the card background
          }}
        >
          <Stack direction="row" sx={{ gap: 2 }}>
            {item.icon}
            <div>
              <Typography
                gutterBottom
                sx={{ fontWeight: "medium", color: "white" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {item.description}
              </Typography>
            </div>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
