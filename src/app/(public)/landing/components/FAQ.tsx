'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const items = [
  {
    id: 'panel1',
    question: 'What is Stack Connect and how can it help my team or group activity?',
    answer: 'Stack Connect is an interactive platform designed to break the ice and build connections through collaborative games. Whether you\'re hosting a physical team gathering, sprint retrospective, or online meeting, our games foster engagement and fun conversations.',
  },
  {
    id: 'panel2',
    question: 'Do I need to create an account to start playing?',
    answer: 'You can jump right in without an account for quick sessions! However, creating an account unlocks custom game settings, game history tracking, and personalized game recommendations.',
  },
  {
    id: 'panel3',
    question: 'Does Stack Connect support hybrid teams or remote participants?',
    answer: 'Yes! Our online mode is built for seamless hybrid sessions, allowing both in-room and remote participants to interact through the same game interface in real-time.',
  },
  {
    id: 'panel4',
    question: 'Is Stack Connect free to use?',
    answer: 'Stack Connect is free to use for most games and features. As the platform grows and traffic increases, some advanced features or higher traffic usage may be subject to limitations or premium access to ensure sustainable service.',
  },
  {
    id: 'panel5',
    question: 'Is there a limit to how many players can join a game?',
    answer: 'Stack Connect is designed to accommodate both small teams and larger groups. While there are no fixed limits for now, player capacity may be adjusted in the future to maintain a smooth user experience as the platform scales.',
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        {items.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded.includes(item.id)}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${item.id}d-content`}
              id={`${item.id}d-header`}
            >
              <Typography component="span" variant="subtitle1">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
