import React, { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { Container } from "@mui/system";
import { createApi } from "unsplash-js";
import { debounce } from "lodash";

const api = createApi({
  accessKey: "a48Tv5EtAU1NQrAYUionrhJ7CxpL3rJMp_hH00LjFF8",
});

function ImageSearch() {
  const [searchKey, setSearchKey] = useState("");
  const [images, setImages] = useState<any>();

  //search input handler
  const searchKeyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event?.currentTarget.value);
  };

  //Calling the unsplash api  and fetching Images
  const fetchImages = async (key: string, cb: any) => {
    const res = await api.search.getPhotos({
      query: key,
      orientation: "landscape",
    });
    cb(res);
  };

  //debouncing the api calls
  const debouncedFetchImages = useCallback(
    debounce((query: string, cb: any) => {
      fetchImages(query, cb);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetchImages(searchKey, (res: any) => {
      console.log(res);
      if (res && res.response && res.response.results) {
        setImages(res.response.results);
      }
    });
  }, [searchKey]);

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
