import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Free Plan",
    subtitle:
      "Begin your adventure with Stack Connect for free. Ideal for small groups and casual gatherings!",
    price: 0,
    description: [
      "Up to 15 players per session",
      "Access to select games for team bonding",
      "Basic game analytics to track engagement"
    ],
    buttonText: "Get Started for Free",
    buttonVariant: "outlined",
    buttonColor: "primary"
  },
  {
    title: "Growth Plan",
    subtitle:
      "Perfect for teams looking to enhance their collaborative experiences, both online and offline.",
    subheader: "Recommended",
    price: 15,
    description: [
      "Up to 50 players per session",
      "Full game library access, including all new releases",
      "Custom game settings to match your event themes",
      "Priority support for quick assistance",
      "Advanced game analytics to optimize sessions"
    ],
    buttonText: "Upgrade Your Experience",
    buttonVariant: "contained",
    buttonColor: "secondary"
  },
  {
    title: "Enterprise Plan",
    subtitle:
      "Tailored for large organizations and teams. Ideal for large organizations and teams.",
    price: "Custom Pricing",
    description: [
      "Unlimited players per session, for any size event",
      "Custom game development options to fit your unique needs",
      "Integration with enterprise tools to streamline operations",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    buttonColor: "primary"
  }
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 }
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" }
        }}
      >
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: "text.primary" }}>
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Unlock the full potential of Stack Connect with our flexible pricing options. Whether
          you’re a casual player or part of a large organization, we have a plan that meets your
          needs!
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        {tiers.map((tier) => (
          <Grid size={{ xs: 12, sm: tier.title === "Enterprise" ? 12 : 6, md: 4 }} key={tier.title}>
            <Card
              sx={[
                {
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4
                },
                tier.title === "Professional" &&
                  ((theme) => ({
                    border: "none",
                    background:
                      "radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))",
                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                    ...theme.applyStyles("dark", {
                      background:
                        "radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))",
                      boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`
                    })
                  }))
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2
                    },
                    tier.title === "Professional" ? { color: "grey.100" } : { color: "" }
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === "Professional" && (
                    <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                  )}
                </Box>
                <Box
                  sx={[
                    {
                      display: "flex",
                      alignItems: "baseline"
                    },
                    tier.title === "Professional" ? { color: "grey.50" } : { color: null }
                  ]}
                >
                  {typeof tier.price === "number" ? (
                    <>
                      <Typography component="h3" variant="h2">
                        ${tier.price}
                      </Typography>
                      <Typography component="h3" variant="h6">
                        &nbsp; per month
                      </Typography>
                    </>
                  ) : (
                    <Typography component="h3" variant="h2">
                      {tier.price}
                    </Typography>
                  )}
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: "divider" }} />
                {tier.description.map((line) => (
                  <Box key={line} sx={{ py: 1, display: "flex", gap: 1.5, alignItems: "center" }}>
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20
                        },
                        tier.title === "Professional"
                          ? { color: "primary.light" }
                          : { color: "primary.main" }
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={"span"}
                      sx={[tier.title === "Professional" ? { color: "grey.50" } : { color: null }]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant as "outlined" | "contained"}
                  color={tier.buttonColor as "primary" | "secondary"}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
