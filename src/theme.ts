'use client';
import { createTheme } from '@mui/material/styles';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                backgroundColor: '#097fe8',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#005bab',
                },
              },
            }
          ]
        }
      }
    }
  },
});

export default theme;