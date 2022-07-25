import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import ImageSearch from "../Components/ImageSearch";

function ImageSearchPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h3" py={4}>
            GO Image Search
          </Typography>
          <ImageSearch />
        </Box>
      </Container>
    </>
  );
}

export default ImageSearchPage;
