'use client';

import { useState } from "react";
import { Box, Card, CardContent, CircularProgress, Link, Stack, Typography } from "@mui/material";

import FrostGlassBox from "@/components/FrostGlassBox";

const placeholderImage =
  "https://res.cloudinary.com/thasup/image/upload/v1740741434/central/landscape/tim-stief-YFFGkE3y4F8-unsplash_cbbwzg.jpg";

interface FrontLayoutProps {
  cardImage?: string;
  backgroundImage?: string;
  gameLink?: string;
  generatorLink?: string;
}

export default function FrontLayout({
  cardImage,
  backgroundImage,
  gameLink,
  generatorLink
}: FrontLayoutProps) {
  const [loadingPath, setLoadingPath] = useState<string | null>(null);

  const links = [
    { link: generatorLink, name: "Offline Mode" },
    { link: gameLink, name: "Online Mode" }
  ];

  const handleClick = (path: string) => {
    setLoadingPath(path);
    window.location.href = path;
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Set the container height, adjust as needed
        backgroundImage: `url(${backgroundImage || placeholderImage})`,
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
          backdropFilter: "blur(2px)", // Frosted glass effect
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
          zIndex: 0
        }}
      />
      <Card
        sx={(theme) => ({
          position: "relative", // Ensure card is above the frosted background
          alignSelf: "center",
          width: "100%",
          borderRadius: theme.shape.borderRadius,
          backgroundImage: `url(${cardImage || placeholderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden", // Ensuring rounded corners apply to the background
          backdropFilter: "blur(10px)", // This creates the frosted glass effect
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
          [theme.breakpoints.up("sm")]: {
            aspectRatio: 16 / 9,
            width: "90%"
          }
        })}
      >
        <CardContent sx={{ height: "100%", padding: "24px" }}>
          <Stack
            direction="column"
            sx={[
              {
                justifyContent: "flex-end",
                alignItems: "center",
                height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
                minHeight: "100%"
              }
            ]}
          >
            <Stack direction={{ xs: "column", sm: "row" }} sx={{ gap: 2 }}>
              {links.map(
                (item, index) =>
                  item.link && (
                    <Link
                      key={index}
                      component="button"
                      onClick={() => handleClick(item.link!)}
                      sx={(theme) => ({
                        width: "200px",
                        borderRadius: theme.shape.borderRadius,
                        textDecoration: "none",
                        transition: "transform 0.5s ease, box-shadow 0.3s ease",
                        cursor: loadingPath === item.link ? "not-allowed" : "pointer",
                        border: "none",
                        background: "none",
                        padding: 0,
                        "&:hover": {
                          boxShadow: loadingPath === item.link ? "none" : "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                          transform: loadingPath === item.link ? "none" : "scale(1.005)"
                        }
                      })}
                    >
                      <FrostGlassBox>
                        {loadingPath === item.link ? (
                          <CircularProgress size={24} sx={{ color: "white" }} />
                        ) : (
                          <Typography
                            gutterBottom
                            variant="h6"
                            sx={{
                              color: "white",
                              textAlign: "center",
                              textTransform: "uppercase",
                              fontWeight: "bold",
                              marginBottom: 0
                            }}
                          >
                            {item.name}
                          </Typography>
                        )}
                      </FrostGlassBox>
                    </Link>
                  )
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
