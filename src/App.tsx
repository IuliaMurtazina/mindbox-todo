import React from "react";
import { Stack, styled, Typography } from "@mui/material";
import { theme } from "./theme/theme";

const StyledMainContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  gap: "1.5rem",
  [theme.breakpoints.down("tablet")]: {
    gap: "1rem",
  },
}));

const App: React.FC = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <StyledMainContainer
        direction="column"
        alignItems="center"
      >
        <Typography
          variant="h1"
          color={theme.palette.colors.accentPink}
        >
          todos
        </Typography>
      </StyledMainContainer>
    </Stack>
  );
};

export default App;
