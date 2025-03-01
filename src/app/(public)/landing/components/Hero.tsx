import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",

        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)"
        })
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 }
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)"
            }}
          >
            STACK&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light"
                })
              })}
            >
              CONNECT
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" }
            }}
          >
            Play, Connect, Grow
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" }
            }}
          >
            Your go-to platform for collaborative, creative, and team-building games. Play with
            friends, strengthen trust, and unlock new levels of fun and connection.
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            alignSelf: "center",
            width: "100%",
            height: 400,
            marginTop: theme.spacing(8),
            borderRadius: theme.shape.borderRadius,
            outline: "6px solid",
            outlineColor: "hsla(220, 25%, 80%, 0.2)",
            border: "1px solid",
            borderColor: theme.palette.grey[200],
            boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
            backgroundImage: `url(https://res.cloudinary.com/thasup/image/upload/v1740741437/central/landscape/alex-mesmer-kRMKxda6aM0-unsplash_ozttwe.jpg)`,
            backgroundSize: "cover",
            [theme.breakpoints.up("sm")]: {
              marginTop: theme.spacing(10),
              height: 700
            },
            ...theme.applyStyles("dark", {
              boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
              outlineColor: "hsla(220, 20%, 42%, 0.1)",
              borderColor: theme.palette.grey[700]
            })
          })}
        />
      </Container>
    </Box>
  );
}
