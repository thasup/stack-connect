import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
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
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "flex-start",
            gap: { xs: 6, sm: 12 },
            p: { xs: 2, sm: 4 },
            width: "100%"
          }}
        >
          <Stack direction="column" gap={2}>
            <Typography variant="h4">Select a game to play 🚀</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Link href="/feelinks">
                <Container
                  maxWidth="lg"
                  sx={{
                    mt: 4,
                    p: 4,
                    border: "1px solid white",
                    borderRadius: "8px",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 0 20px 0 rgba(0, 191, 255, 0.8)",
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  <Stack direction="column" gap={2}>
                    <Typography variant="h6">💖 Feelinks</Typography>
                  </Stack>
                </Container>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
