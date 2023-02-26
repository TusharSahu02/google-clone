import React from "react";
import { styled } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchResults({ data = {} }) {
  return (
    <SearchResultContainer>
      <Typography
        variant="p"
        component="p"
        sx={{
          whiteSpace: "nowrap",
          fontFamily: "Google sans,Robot,arial,sans-serif",
          paddingTop: "8px",
          fontSize: "0.875rem",
        }}
      >
        About {data?.searchInformation?.formattedTotalResults} results{" "}
        {data?.searchInformation?.searchTime} seconds
      </Typography>
      {data?.items?.map((item) => (
        <SearchResultWrapper key={item?.cacheId}>
          <div>
            <SearchResultTitle href={item?.link}>
              {item?.pagemap?.cse_image?.length > 0 &&
                item?.pagemap?.cse_image[0]?.src && (
                  <img src={item?.pagemap?.cse_image[0]?.src} alt="thumbnail" />
                )}
              <Typography
                variant="p"
                component="p"
                sx={{
                  color: "#bdc1c6",
                  fontWeight: "400",
                  fontSize: "0.875rem",
                }}
              >
                {item?.displayLink}
              </Typography>
            </SearchResultTitle>
            <SearchResultTitle href={item?.link}>
              <Typography
                variant="p"
                component="p"
                sx={{
                  color: "#bdc1c6",
                  fontWeight: "400",
                  fontSize: "1.5rem",
                }}
              >
                {item?.title}
              </Typography>
            </SearchResultTitle>
            <SearchResultTitle>
              <Typography
                variant="p"
                component="p"
                sx={{
                  marginTop: "16px",
                  fontSize: "0.875rem",
                  fontFamiy: "Roboto,sans-serif",
                  fontWeight: "normal",
                  color: "#bdc1c6",
                }}
              >
                {item?.snippet}
              </Typography>
            </SearchResultTitle>
          </div>
          <div>
            <IconButton>
              <MoreVertIcon
                sx={{
                  fontSize: "0.875rem",
                  color: "#bdc1c6",
                }}
              />
            </IconButton>
          </div>
        </SearchResultWrapper>
      ))}
    </SearchResultContainer>
  );
}

export default SearchResults;

const SearchResultContainer = styled("div")`
  max-width: 650px;
  margin-left:107px;
  margin-bottom: 100px
  top:140px,
  position:fixed;
  width:100vw;
  height:100vh;
  overflow-y:scroll;
  overflow-x:hidden;

  ::-webkit-scrollbar{
    display:none;
  }
`;
const SearchResultWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 48px;
`;
const SearchResultTitle = styled("a")`
  text-decoration: none;
  img {
    object-fit: contain;
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }
  &:hover {
    text-decoration: underline;
    color: #bdc1c6;
  }
`;
