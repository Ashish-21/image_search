import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { Container } from "@mui/system";

function ImageSearch() {
  const [searchKey, setSearchKey] = useState("");

  //search input handler
  const searchKeyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event?.currentTarget.value);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Stack paddingBottom={8}>
          <TextField
            fullWidth
            label="Image Search"
            id="imageSearch"
            placeholder="Search for your image"
            onChange={searchKeyHandler}
            value={searchKey}
            required={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Container>
    </div>
  );
}

export default ImageSearch;
