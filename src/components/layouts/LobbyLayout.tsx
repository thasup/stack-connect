import { Box, Stack } from "@mui/material";

interface LobbyLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

export default function LobbyLayout({ children, backgroundImage }: LobbyLayoutProps) {
  return (
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden", // Prevent overflow for contents
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: "center",
              height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
              minHeight: "100%",
              pt: 13.5,
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
              {children}
            </Stack>
          </Stack>
        </Stack>
      </Box>
  );
}
