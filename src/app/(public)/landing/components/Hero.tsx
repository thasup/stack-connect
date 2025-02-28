import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
            Stack&nbsp;
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
              Connect
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

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh", // Set the container height, adjust as needed
            backgroundImage: "url(https://res.cloudinary.com/thasup/image/upload/v1740741437/central/landscape/alex-mesmer-kRMKxda6aM0-unsplash_ozttwe.jpg)", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden", // Prevent overflow for contents
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* Frosted background effect */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backdropFilter: "blur(10px)", // Frosted glass effect
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
              zIndex: 1
            }}
          />
          <Card
            sx={(theme) => ({
              position: 'relative', // Ensure card is above the frosted background
              alignSelf: "center",
              marginTop: theme.spacing(8),
              width: "100%",
              height: 400,
              borderRadius: theme.shape.borderRadius,
              backgroundImage: `url(https://res.cloudinary.com/thasup/image/upload/v1740741437/central/landscape/alex-mesmer-kRMKxda6aM0-unsplash_ozttwe.jpg)`,
              backgroundSize: "cover",
              overflow: "hidden", // Ensuring rounded corners apply to the background
              backdropFilter: "blur(10px)", // This creates the frosted glass effect
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
              boxShadow: 3, // Base shadow
              transition: "transform 0.5s ease, box-shadow 0.3s ease",
              [theme.breakpoints.up("sm")]: {
                marginTop: theme.spacing(10),
                height: 700
              },
              "&:hover": {
                transform: "scale(1.01)", // Scale up slightly and move up
                boxShadow: 8 // Increase shadow on hover
              }
            })}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Elegant Shadow Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a card with an elegant shadow effect.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
