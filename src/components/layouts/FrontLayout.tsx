import { Box, Card, CardContent, Link, Stack, Typography } from "@mui/material";

interface FrontLayoutProps {
  backgroundImage: string;
  gameLink?: string;
  generatorLink?: string;
}

export default function FrontLayout({
  backgroundImage,
  gameLink,
  generatorLink
}: FrontLayoutProps) {
  const links = [
    { link: generatorLink, name: "Generator" },
    { link: gameLink, name: "Play Game" }
  ];
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Set the container height, adjust as needed
        backgroundImage: `url(${backgroundImage})`,
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
          width: "80%",
          height: 400,
          borderRadius: theme.shape.borderRadius,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden", // Ensuring rounded corners apply to the background
          backdropFilter: "blur(10px)", // This creates the frosted glass effect
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
          [theme.breakpoints.up("sm")]: {
            height: 700
          }
          // "&:before": {
          //   content: '""',
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          //   backgroundColor: "rgba(0, 0, 0, 0.25)", // Black overlay with 50% opacity
          //   borderRadius: theme.shape.borderRadius
          // }
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
            <Stack direction="row" sx={{ gap: 2 }}>
              {links.map(
                (item, index) =>
                  item.link && (
                    <Link key={index} href={item.link} sx={{ textDecoration: "none" }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "200px",
                          padding: 3,
                          borderRadius: (theme) => theme.shape.borderRadius,
                          backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                          backdropFilter: "blur(2px)", // Frosted glass effect
                          zIndex: 10, // Ensure it is above the card background
                          transition: "transform 0.5s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            boxShadow:
                              "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
                            transform: "scale(1.005)"
                          }
                        }}
                      >
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
                      </Box>
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
