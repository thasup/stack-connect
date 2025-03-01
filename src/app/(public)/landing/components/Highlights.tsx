'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import InsightsIcon from '@mui/icons-material/Insights';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HandshakeIcon from '@mui/icons-material/Handshake';

const items = [
  {
    icon: <SportsEsportsIcon />,
    title: 'Dynamic Game Library',
    description:
      'Explore a diverse selection of ice-breaking and collaborative games — perfect for board game nights, sprint retrospectives, casual team gatherings, or virtual hangouts. Designed to suit any occasion and group size.',
  },
  {
    icon: <AllInclusiveIcon />,
    title: 'Seamless Hybrid Experiences',
    description:
      'Break down barriers between physical and online interactions with synchronized multiplayer games that deliver the same immersive experience, whether in the same room or remotely connecting.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'AI-Enhanced Engagement',
    description:
      'Personalized prompts and adaptive content ensure that no two sessions are ever the same, helping everyone feel included and stimulating creativity through dynamic storytelling and collaborative tasks.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Inclusive for All',
    description:
      'Designed for all personalities and group dynamics, from outgoing teams to those needing a little nudge to get conversations flowing.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Effortless Setup',
    description:
      'Jump into games instantly with no technical barriers — just share a link and start playing, with built-in support for both desktop and mobile devices.',
  },
  {
    icon: <InsightsIcon />,
    title: 'Reliable and Ever-Evolving',
    description:
      'A top-notch platform built to scale with your team’s needs, constantly updated with new games, features, and improvements — ensuring there\'s always something fresh to explore.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Discover how Stack Connect redefines ice-breaking and team-bonding experiences, making every gathering 
            — whether online or in-person — more engaging, meaningful, and unforgettable.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
