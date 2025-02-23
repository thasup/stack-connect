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
