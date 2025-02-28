'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Alex" src="https://res.cloudinary.com/thasup/image/upload/v1740761387/central/avartar/lion_nyyvpk.jpg" />,
    name: 'Alex',
    occupation: 'The Lion',
    testimonial:
      "Stack Connect made our team game nights truly special. It's the perfect way to bond, laugh, and build trust.",
  },
  {
    avatar: <Avatar alt="Marty" src="https://res.cloudinary.com/thasup/image/upload/v1740761387/central/avartar/zebra_fsgadj.jpg" />,
    name: 'Marty',
    occupation: 'The Zebra',
    testimonial:
      "I love how Stack Connect keeps adding new games. There's always something fresh to enjoy with friends!",
  },
  {
    avatar: <Avatar alt="Gloria" src="https://res.cloudinary.com/thasup/image/upload/v1740761387/central/avartar/hippo_nlxcld.jpg" />,
    name: 'Gloria',
    occupation: 'The Hippopotamus',
    testimonial:
      'The collaborative games helped break the ice in our group — now we feel more connected than ever.',
  },
  {
    avatar: <Avatar alt="Melman" src="https://res.cloudinary.com/thasup/image/upload/v1740761386/central/avartar/giraffe_y2onft.jpg" />,
    name: 'Melman',
    occupation: 'The Giraffe',
    testimonial:
      "It's not just a game platform — it's a space where creativity, connection, and fun come together.",
  },
  {
    avatar: <Avatar alt="King Julien" src="https://res.cloudinary.com/thasup/image/upload/v1740761387/central/avartar/lemur_kmbzsk.jpg" />,
    name: 'King Julien',
    occupation: 'King of Madagascar',
    testimonial:
      "Stack Connect redefined how we play and connect. The endless expandability keeps us coming back for more.",
  },
  {
    avatar: <Avatar alt="Skipper" src="https://res.cloudinary.com/thasup/image/upload/v1740761386/central/avartar/penguin_sdfgkb.jpg" />,
    name: 'Skipper',
    occupation: 'The Captain',
    testimonial:
      "A must-have for any team or group looking to build trust and enjoy unforgettable experiences.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
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
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          What Our Players Say
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Discover how Stack Connect brings people closer, strengthens team bonds, and makes every game unforgettable. 
          Join the community where fun meets connection.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
