import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

function ImageSearchPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h3" py={4}>
            GO Image Search
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default ImageSearchPage;
