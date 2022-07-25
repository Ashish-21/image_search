import React, { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { Container } from "@mui/system";
import { createApi } from "unsplash-js";
import { debounce } from "lodash";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { APIModel } from "../Models/ImageSearchModel";

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
    }, 400),
    []
  );

  useEffect(() => {
    debouncedFetchImages(searchKey, (res: APIModel) => {
      if (res.response && res.status === 200 && res?.response?.results) {
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
      <Container maxWidth="lg">
        <ImageList variant="masonry" cols={3} gap={8}>
          {images && images.length
            ? images.map((img: any) =>
                img.urls.regular ? (
                  <ImageListItem key={img.id}>
                    <img
                      src={`${img.urls.regular}?w=248&fit=crop&auto=format`}
                      srcSet={`${img.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={img.alt_description}
                    />
                  </ImageListItem>
                ) : null
              )
            : null}
        </ImageList>
      </Container>
    </div>
  );
}

export default ImageSearch;
