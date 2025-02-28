import { Box, BoxProps } from "@mui/material";

export default function FrostGlassBox({
  children,
  ...props
}: { children: React.ReactNode } & BoxProps) {
  return (
    <Box
      {...props}
      sx={(theme) => ({
        position: "relative",
        padding: 3,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent white
        backdropFilter: "blur(2px)", // Frosted glass effect
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Shadow for depth
        zIndex: 10 // Ensure it is above the card background
      })}
    >
      {children}
    </Box>
  );
}
