"use client";

import { ROUTE } from "@/constants/common";
import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const links = [
  {
    href: ROUTE.FEELINKS.PATH,
    title: "💖 Feelinks"
  },
  {
    href: ROUTE.SOUNDS_FISHY.PATH,
    title: "🐟 Sounds Fishy"
  },
  {
    href: ROUTE.ITO.PATH,
    title: "🎲 ITO"
  }
];

export default function GamesPage() {
  return (
    <Stack
      direction="column"
      sx={[
        {
          justifyContent: "center",
          height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
          minHeight: "100%",
          width: "100%"
        }
      ]}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          justifyContent: "center",
          gap: { xs: 6, sm: 12 },
          p: 2
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
            <Typography variant="h5" sx={{ typography: { md: 'h4' } }}>Select a game to play 🚀</Typography>
            <Stack direction={{ xs: "column", md: "row" }} spacing={4} flexWrap="wrap">
              {links.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Container
                    maxWidth="lg"
                    sx={{
                      mt: 4,
                      p: 4,
                      border: "1px solid white",
                      borderRadius: "8px",
                      minWidth: "200px",
                      textAlign: "center",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0 0 20px 0 rgba(0, 191, 255, 0.8)",
                        transform: "scale(1.05)"
                      }
                    }}
                  >
                    <Stack direction="column" gap={2}>
                      <Typography variant="h6">{link.title}</Typography>
                    </Stack>
                  </Container>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
